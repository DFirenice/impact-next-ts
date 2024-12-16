'use client'

import Heading from "@/components/Heading"
import Btn from "@/components/UI/Btn/Btn"
import Field from "@/components/UI/Field/Field"
import Icon from "@/components/UI/Icon"
import Splitter from "@/components/UI/Splitter/Splitter"

import { signIn } from "next-auth/react"
import { useState } from 'react'

import css from './styles.module.css'

type authMethods = 'login' | 'signup'

const SignUpForm = () => { 
    const [ isPswrdVisible, setPswrdVisible ] = useState(false),
        swapPswrdVisibility = () => { setPswrdVisible(prev => !prev) }

    return (
        <form onSubmit={(e) => { e.preventDefault() }}>
            <div>
                <Field
                    text="Username"
                    icon="user"
                />
                <Field
                    text="email@example.com"
                    icon="mail"
                />
                <Field  
                    text="Password"
                    type={isPswrdVisible ? 'text' : 'password'}
                    icon={[isPswrdVisible ? 'visible' : 'invisible', "large"]}
                    order="field-icon"
                    func={swapPswrdVisibility}
                />
                <Field
                    text="Confirm password"
                    type={isPswrdVisible ? 'text' : 'password'}
                />
            </div>
            <Btn classes="btn-fill">Sign Up</Btn>
        </form>
    )
}

const LogInForm = () => {
    const [ isPswrdVisible, setPswrdVisible ] = useState(false),
        swapPswrdVisibility = () => { setPswrdVisible(prev => !prev) }
        
    return (
        <form onSubmit={(e) => { e.preventDefault() }}>
            <div>
                <Field
                    text="Username or email"
                    icon="user"
                />
                <Field  
                    text="Password"
                    type={isPswrdVisible ? 'text' : 'password'}
                    icon={[isPswrdVisible ? 'visible' : 'invisible', "large"]}
                    order="field-icon"
                    func={swapPswrdVisibility}
                />
            </div>
            <Btn classes="btn-fill">Log In</Btn>
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