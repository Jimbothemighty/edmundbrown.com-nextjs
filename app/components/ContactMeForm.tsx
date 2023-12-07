'use client';

import { useRef, useState } from "react";

export function ContactMeForm() {
    return <div id="contactUs" className="responsiveBlurb">
        <h2 style={{paddingBottom: "0px", marginBottom: "0px"}}>Contact</h2>
        <p>
            Please complete the form below to contact me with business enquiries, or email directly at ed@edmundbrown.com.
        </p>
        <ContactForm/>
    </div>
}

type postDataType = {
    thisName? : string,
    thisEmail? : string,
    thisPhone? : string,
    thisMsg? : string,
}

function ContactForm() {
    const [respMsg, setRespMsg] = useState(``)
	const nameElement = useRef<HTMLInputElement>(null)
	const emailElement = useRef<HTMLInputElement>(null)
	const phoneElement = useRef<HTMLInputElement>(null)
	const queryElement = useRef<HTMLTextAreaElement>(null)

    async function submitForm() {
        let postData : postDataType = {
            thisName : nameElement.current?.value,
            thisEmail :  emailElement.current?.value,
            thisPhone :  phoneElement.current?.value,
            thisMsg :  queryElement.current?.value 
        };

        let passed = true;
        for (const key in postData) {
            if (Object.prototype.hasOwnProperty.call(postData, key)) {
                const element = postData[key as keyof postDataType];
                if (element === null || element?.trim() === ``) {
                    passed = false;
                }
            }
        }
        if (!passed) {
            setRespMsg("Not all fields are completed. Please revise your entries and try again.");
            return;
        }

        let formBody = [];
        for (const key in postData) {
            if (Object.prototype.hasOwnProperty.call(postData, key)) {
                const element = postData[key as keyof postDataType];

                if (!element) {
                    continue;
                }

                const encodedKey = encodeURIComponent(key);
                const encodedValue = encodeURIComponent(element);
                formBody.push(encodedKey + "=" + encodedValue);
            }
        }
        const formBodyStr = formBody.join("&");

		const response = await fetch("/phplibs/recordEnquiry.php", {
			method: "POST",
			credentials: `include`,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			},
			body:formBodyStr,
		})

        const responseData = await response.text()

        const data = JSON.parse(responseData)

        if (data.success) {
            if (data.outputMessage) {
                setRespMsg(data.outputMessage)
            }
        }
        else {
            if (data.outputMessage) {
                setRespMsg(data.outputMessage)
            }
            else {
                setRespMsg("Sorry, an unknown error occurred");
            }
        }
    }

    return <div className="formContainer">
        <div className="fieldsContainer">
            <div className="left">
                <input ref={nameElement} type="text" name="name" id="name" placeholder="Name"/>
                <input ref={emailElement} type="text" name="email" id="email" placeholder="Email"/>
                <input ref={phoneElement} type="text" name="phone" id="phone" placeholder="Phone"/>
            </div>
            <div className="right">
                <textarea ref={queryElement} name="query" id="query" placeholder="Message"></textarea>
            </div>
        </div>
        <div className="serverResponse">{respMsg}</div>
        <button onClick={submitForm}>Submit</button>
    </div>
}