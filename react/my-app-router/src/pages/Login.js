import { useStoreState, useStoreActions } from "easy-peasy";
import { useNavigate } from "react-router-dom";

import "../assets/styles/login.css";


// 根据手机号和密码登录
const Login = () => {
    const password = useStoreState((state) => state.password);
    const phone = useStoreState((state) => state.phone);

    const setPassword = useStoreActions((actions) => actions.setPassword);
    const setPhone = useStoreActions((actions) => actions.setPhone);

    const navigate = useNavigate();


    const handleLogin = async () => {
        try {
            const res = await login(phone, password);
            console.log(res);
            if (res !== '' && res.token !== '') {
                // 跳转到首页
                navigate('/');
                // 保存 token
                localStorage.setItem('token', res.token);
                // 保存用户信息
                localStorage.setItem('username', phone);
            } else {
                alert('登录失败');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const login = async (login, password) => {
        console.log(login, password);
        const res = await fetch('http://localhost:13000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "login": login, "password": password }),
        });
        const data = await res.json();
        return data;
    };

    return (
        <main className="login-container">
            <div className="login-form">
                <h1 className="login-title">登录</h1>
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="请输入手机号"
                    className="login-input"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="请输入密码"
                    className="login-input"
                />
                <button onClick={handleLogin} className="login-button">登录</button>
            </div>
        </main>
    );
}

export default Login;