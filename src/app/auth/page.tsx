'use client'

import Heading from "@/components/Heading"
import Btn from "@/components/UI/Btn/Btn"
import Field from "@/components/UI/Field/Field"
import Icon from "@/components/UI/Icon"
import Splitter from "@/components/UI/Splitter/Splitter"

import { usePathname } from "next/navigation"
import { useState } from 'react'

import css from './styles.module.css'

type logMethods = 'login' | 'signup'

const LogInForm = () => {
    return (
        <form>
            <div>
                <Field
                    text="Username"
                    icon="user"/>
                <Field
                    text="email@example.com"
                    icon="mail"/>
                <Field
                    text="Password"
                    type="password"
                    icon={["invisible", "large"]}
                    order="field-icon"/>
                <Field
                    text="Confirm password"
                    type="password"
                    icon={["invisible", "large"]}
                    order="field-icon"/>
            </div>
            <Btn classes="btn-fill">Log In</Btn>
        </form>
    )
}

const SignUpForm = () => {
    return (
        <form>
            <div>
                <Field
                    text="Username or email"
                    icon="user"/>
                <Field
                    text="Password"
                    type="password"
                    icon={["invisible", "large"]}
                    order="field-icon"/>
            </div>
            <Btn classes="btn-fill">Sign Up</Btn>
        </form>
    )
}

const Auth = () => {
    const pathname = usePathname()
    const [ logMethod, setLogMethod ] = useState<logMethods>('login')

    const changeLogMethod = (method:logMethods) => () => { setLogMethod(method) }

    return <section className={css.auth}>
        <div className={css.wrapper}>
            <div className={css.greetings}>
                <Heading size="massive">
                    {
                        logMethod === 'login'
                            ? 'Welcome Back !'
                            : 'Hello, there !'
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
                        <Btn><Icon size="large" id="git"/></Btn>
                        <Btn classes="btn-light"><Icon size="large" id="google"/></Btn>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Auth