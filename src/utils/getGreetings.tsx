export default function getGreetings (username: string = 'User') {
    const localTime = new Date().getHours()

    const greetings = [
        { start: 22, end: 4, message: "Good Night" },
        { start: 4, end: 12, message: "Good Morning" },
        { start: 12, end: 16, message: "Good Afternoon" },
        { start: 16, end: 22, message: "Good Evening" }
    ]

    const greeting = greetings.find(({ start, end }) => {
        return (start <= end && localTime >= start && localTime < end) ||
               (start > end && (localTime >= start || localTime < end))
    })

    return {
        complete: `${greeting ? greeting.message : "Welcome"}, ${username}!`,
        greeting: `${greeting ? greeting.message : "Welcome"}`,
        username: username
    }
}