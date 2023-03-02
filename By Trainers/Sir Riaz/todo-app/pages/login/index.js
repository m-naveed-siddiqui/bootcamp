import { useRouter } from "next/router";

import LoginForm from "@/components/auth/LoginForm";

function LoginPage() {
    const router = useRouter();

    async function handleLoginUser(loginData) {
        const response = await fetch("http://localhost:5000/api/auth", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData)
        })

        const { errors, token } = await response.json();

        if (!errors) {
            localStorage.setItem('userToken', token)
            router.push('/');
        }
    }

    return <LoginForm onLoginUser={handleLoginUser} />
}

export default LoginPage;