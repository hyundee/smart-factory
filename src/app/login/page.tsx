import { signIn } from "next-auth/react";

export default function CustomLogin() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // HTMLFormElement로 타입을 명시
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        // 로그인 시도
        await signIn("credentials", {
            redirect: false,
            username,
            password,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" type="text" placeholder="이메일" required />
            <input
                name="password"
                type="password"
                placeholder="비밀번호"
                required
            />
            <button type="submit">로그인</button>
        </form>
    );
}
