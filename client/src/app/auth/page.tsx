'use client'

import Heading from "@/components/Heading"
import Btn from "@/components/UI/Btn/Btn"
import Field from "@/components/UI/Field/Field"
import Icon from "@/components/UI/Icon"
import Splitter from "@/components/UI/Splitter/Splitter"

import { signIn } from "next-auth/react"
import { useState } from 'react'
import axios from "axios"

import css from './styles.module.css'

type authMethods = 'login' | 'signup'
type TSubmission = React.FormEvent<HTMLFormElement>

const handlePostErrors = (err: unknown) => {
    axios.isAxiosError(err)
        ? console.error('Error response:', err.response?.data || err.message)
        : console.error('Unexpected error: ', err)
}

const SignUpForm = () => { 
    const [ isPswrdVisible, setPswrdVisible ] = useState(false),
        // The heck is this bunch of useState()s?
        // REFACTORING REQUIRED
        [ username, setUsername ] = useState(''),
        [ email, setEmail ] = useState(''),
        [ password, setPassword ] = useState(''),
        [ confirmPswrd, setConfirmPswrd ] = useState('')
    
    const swapPswrdVisibility = () => { setPswrdVisible(prev => !prev) }
    const handleSignup = async (e: TSubmission) => {
        e.preventDefault()

        if (password === confirmPswrd) {
            try {
                const res = await axios.post('http://localhost:8080/signup', {
                    username,
                    email,
                    password
                })
                console.log(res.data)
            } catch(err) { handlePostErrors(err) }
        } else {
            // Display error 
        }
    }

    return (
        <form onSubmit={handleSignup}>
            <div>
                <Field
                    state={[ username, setUsername ]}
                    text="Username"
                    icon="user"
                />
                <Field
                    state={[ email, setEmail ]}
                    text="email@example.com"
                    icon="mail"
                />
                <Field  
                    state={[ password, setPassword ]}
                    type={isPswrdVisible ? 'text' : 'password'}
                    icon={[isPswrdVisible ? 'visible' : 'invisible', "large"]}
                    func={swapPswrdVisibility}
                    order="field-icon"
                    text="Password"
                />
                <Field
                    state={[ confirmPswrd, setConfirmPswrd ]}
                    type={isPswrdVisible ? 'text' : 'password'}
                    text="Confirm password"
                />
            </div>
            <Btn classes="btn-fill" type="submit">Sign Up</Btn>
        </form>
    )
}

const LogInForm = () => {
    const [ isPswrdVisible, setPswrdVisible ] = useState(false),
        [ login, setLogin ] = useState(''),
        [ password, setPassword ] = useState('')

    const swapPswrdVisibility = () => { setPswrdVisible(prev => !prev) }
    const handleLogin = async (e: TSubmission) => {
        e.preventDefault()

        try {
            const res = await axios.post('http://localhost:8080/login', {
                email: login,
                password
            })
            // User doc
            console.log(res.data)
        } catch(err) { handlePostErrors(err) }
    }
    
    return (
        <form onSubmit={handleLogin}>
            <div>
                <Field
                    text="your@email.example"
                    icon="user"
                    state={[ login, setLogin ]}
                />
                <Field  
                    text="Password"
                    type={isPswrdVisible ? 'text' : 'password'}
                    icon={[isPswrdVisible ? 'visible' : 'invisible', "large"]}
                    order="field-icon"
                    func={swapPswrdVisibility}
                    state={[ password, setPassword ]}
                />
            </div>
            <Btn classes="btn-fill" type="submit">Log In</Btn>
        </form>
    )
}

const Auth = () => {
    const [ logMethod, setLogMethod ] = useState<authMethods>('login')
    
    const changeLogMethod = (method:authMethods) => () => { setLogMethod(method) }
    const continueWithGithub = () => { signIn('github', { callbackUrl: '/home' }) }

    return <section className={css.auth}>
        <div className={css.wrapper}>
            <div className={css.greetings}>
                <Heading size="massive">
                    {
                        logMethod === 'login'
                            ? 'Hello, there !'
                            : 'Welcome Back !'
                    }
                </Heading>
                <Splitter/>
                <div>
                    <Btn
                        classes={`btn-none ${logMethod === 'login' && 'active_link'}`}
                        func={changeLogMethod('login')}
                        type="submit"
                    >
                        Log In
                    </Btn>
                    <span data-font-accent="low">{` / `}</span>
                    <Btn
                        classes={`btn-none ${logMethod === 'signup' && 'active_link'}`}
                        func={changeLogMethod('signup')}
                        type="submit"
                    >
                        Sign Up
                    </Btn>
                </div>
            </div>
            <div className={css.form}>
                {
                    logMethod === 'login'
                        ? <LogInForm/>
                        : <SignUpForm/>
                }

                <div className={css.other_methods_container}>
                    <div>
                        <Splitter/>
                        <span data-font-accent="low">or</span>
                    </div>
                    <div className={css.methods_list}>
                        <Btn func={continueWithGithub}><Icon size="large" id="git"/></Btn>
                        <Btn classes="btn-light"><Icon size="large" id="google"/></Btn>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Auth