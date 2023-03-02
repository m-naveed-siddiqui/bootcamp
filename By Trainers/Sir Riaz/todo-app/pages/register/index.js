import { useRouter } from "next/router";
import CreateUserForm from "@/components/auth/CreateUserForm";

function RegisterPage() {
    const router = useRouter();

    async function handleAddUser(userData) {
        const response = await fetch("http://localhost:5000/api/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        const { errors, token } = await response.json();

        if (!errors) {
            localStorage.setItem('userToken', token)
            router.push('/login');
        }
    }

    return <CreateUserForm onAddUser={handleAddUser} />
}

export default RegisterPage;