import React from "react";
import styled from "styled-components";

const ContactSec = styled.section`
padding-top: 64px;
padding-left: 32px;
padding-right: 32px;
padding-bottom: 120px;
display: flex;

@media screen and (max-width: 414px) {
    display: block;
}
`;

const ContactLeft = styled.div`
width: 50%;

@media screen and (max-width: 414px) {
    width: 100%;
    margin-bottom: 16px;
}

`;

const ContactRight = styled.div`
width: 50%;
padding-left: 32px;

@media screen and (max-width: 414px) {
    width: 100%;
padding: initial;
}
`;

const SocialInner = styled.div`
`;


const SocialMedia = styled.div``;

const SocialMedia001 = styled.ul`
list-style: none;
font-size: 18px;
margin-top: 16px;
width: 25%;
`;

const SocialLink = styled.li`
padding: 8px 16px;




a {
    display: flex;
    text-decoration: none;
    align-items: center;

    &:hover {
        opacity: 0.7;
    text-decoration: underline;
        
    }
}
`;

const SocialIcon = styled.div`
font-size: 24px;
`;

const SocialLabel = styled.div`
margin-left: 8px;
`;

const SecHeader = styled.div`
h2 {
    font-size: 32px;
}
`;

const FormContain = styled.div`
margin-top: 16px;
`;

const ContactForm = styled.form`

`;

const FormInput = styled.div`

display: block;

input {
    opacity: 0.5;
    width: 100%;
    padding: 8px 16px;
    border: 1px solid;
    margin-top: 8px;
    margin-bottom: 16px;
    resize: vertical;
}

textarea {
    width: 100%;
    height: 320px;
   opacity: 0.5;
}
`;

const SubmitBtn = styled.button`
font-size: 18px;
margin-top: 16px;
padding: 8px 16px;
border: none;
cursor: pointer;
background-color: #5C618A;

&:hover {
    opacity: 0.7;
}
`;



export default function ContactMe( {contacts}) {
    
const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");
const [message, setMessage] = React.useState("");

function encode(data) {
    return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
}

function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
        method: "POSTS", 
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: encode({ "form-name" : "contact", name, email, message }),
    }).then(() => alert("Your message has been sent.")).catch((error) => alert(error));
}

    return(
        <ContactSec id="ContactMe">
            <ContactLeft>
            <SecHeader>
                <h2>Follow Me!</h2>
                </SecHeader>
<SocialInner>   
        <SocialMedia>
            <SocialMedia001>
                {contacts.map(({id, icon, label, link}) => (
                <SocialLink key={id}>
                    <a href={link}>
<SocialIcon>{icon}</SocialIcon>
<SocialLabel>{label}</SocialLabel>
                    </a>
                </SocialLink>
                ))}
            </SocialMedia001>
        </SocialMedia>
</SocialInner>
            </ContactLeft>
            <ContactRight>
<SecHeader>
                <h2>Let's Work Together</h2>
                </SecHeader>
            <FormContain>
<ContactForm onSubmit={handleSubmit}>
<FormInput>
    <label>Name</label>
    <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)}/>
</FormInput>
<FormInput>
    <label>E-mail</label>
    <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
</FormInput>
<FormInput>
    <label>Message</label>
    <textarea id="message" name="message" onChange={(e) => setMessage(e.target.value)}/>
</FormInput>
<SubmitBtn type="submit">Submit</SubmitBtn>
</ContactForm>
            </FormContain>
            </ContactRight>
        </ContactSec>
    )
}
