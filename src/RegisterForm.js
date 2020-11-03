import { useState } from 'react'
import styled from 'styled-components/macro'

export default function RegisterForm() {

    const [userProfile, setUserProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: 'female',
        toc: 'false'
    })

    function sendForm(event) {
        event.preventDefault()
        if(validateForm(userProfile)) {alert('Success')}
        console.log(userProfile)
    }

    function handleChange(event) {
        
        const fieldValue = event.target.name === 'toc' ? event.target.checked : event.target.value

        setUserProfile({
            ...userProfile,
            [event.target.name]: fieldValue,
        });
    }

    return <FormWrapper onSubmit={sendForm}>
        <h1>Register</h1>
        <form>
            <Fieldset onSubmit={sendForm}>
                <div>
                    <label htmlFor="firstname"><strong>First</strong></label>
                    <input type="text" name="firstName" onChange={handleChange} value={userProfile.firstName}/>
                </div>
                <div>
                    <label htmlFor="lastname"><strong>Last</strong></label>
                    <input type="text" name="lastName" onChange={handleChange} value={userProfile.lastName}/>
                </div>
            </Fieldset>

            <label>
                <strong>Email</strong>
                <input type="text" name="email" onChange={handleChange} value={userProfile.email}/>
            </label>
            
            <h4>Gender</h4>

            <Fieldset>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="male" 
                        checked={userProfile.gender === 'male'} 
                        onChange={handleChange}
                    />
                    Male
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="female" 
                        checked={userProfile.gender === 'female'} 
                        onChange={handleChange}
                    />
                    Female
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="diverse" 
                        checked={userProfile.gender === 'diverse'} 
                        onChange={handleChange}
                    />
                    Diverse
                </label>
            </Fieldset>

            <label>
                <input type="checkbox" name="toc" onChange={handleChange}/>
                I read the terms and conditions
            </label>

            <div>
                <Button>Register</Button>
            </div>
            

        </form>
        
    </FormWrapper>
}

// Validate Form Functions

const validateEmail = ({email}) => email.includes('@') && hasValidDomain(email)

const hasValidDomain = (email) => {
    const parts = email.split('.')
    return parts.length >= 2 && parts[parts.length-1].length >= 2;
}

const validateName = ({firstName, lastName}) => firstName.length >=2 && lastName.length >= 2 

const tocAccepted = ({toc}) => toc

const validateForm = (userProfile) => validateName(userProfile) && validateEmail(userProfile) && tocAccepted(userProfile)


const FormWrapper = styled.div`
    display: grid;
    gap: 1.5rem;
    max-width: 380px;
    font-family: sans-serif;

    margin: 0 auto;

    fieldset {
        border: none;
        padding: 0;
    }

    small {
        color: #999;
    }

    input[type="text"], input[type="email"] {
        display: block;
        margin-right: 1rem;
    }

    input[type="radio"] {
        margin: 0 .5rem 1rem 0;
        padding: 0;
        transform: scale(1.5);
    }

    input[type="checkbox"] {
        transform: scale(1.5);
        margin-right: .5rem; 
    }

    h4 {
        margin-bottom: 0.5rem;
    }

`
const Fieldset = styled.fieldset`
    display: flex;
    justify-content: space-between;
`

const Button = styled.button`
    border: none;
    background: orange;
    color: ivory;
    padding: 1rem 2rem;
    border-radius: .5rem;
    font-size: 1.3rem;
`