const register = document.getElementById("register");
const login = document.getElementById("login");
const home = document.getElementById("home");
const kritik = document.getElementById("kritik");
const snow = document.getElementById("snow");

document.querySelectorAll(".showregister").forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();

        gsap.to(home, {
            opacity: 0,
            x: -100,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1,
            onComplete: () => {
                register.classList.remove("hidden");
                login.classList.add("hidden");
                home.classList.add("hidden");
                kritik.classList.add("hidden");
                gsap.fromTo(
                    [register, login],
                    {
                        opacity: 0,
                        x: 80,
                        scale: 0.9,
                        rotation: 3
                    },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        rotation: 0,
                        ease: "power3.out",
                        duration: 0.6
                    }
                );
            }
        });
    });
});
document.querySelectorAll(".showlogin").forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();

        gsap.to(home, {
            opacity: 0,
            x: 100,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1,
            onComplete: () => {
                register.classList.add("hidden");
                login.classList.remove("hidden");
                home.classList.add("hidden");
                kritik.classList.add("hidden");
                gsap.fromTo(
                    [login, register],
                    {
                        opacity: 0,
                        x: -80,
                        scale: 0.9,
                        rotation: 3
                    },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        rotation: 0,
                        ease: "power3.out",
                        duration: 0.6
                    }
                );
            }
        });
    });
});
document.querySelectorAll(".showmenu").forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();

        gsap.to([login, register], {
            opacity: 0,
            x: 100,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1,
            onComplete: () => {
                register.classList.add("hidden");
                login.classList.add("hidden");
                home.classList.remove("hidden");
                kritik.classList.add("hidden");
                gsap.fromTo(
                    home,
                    {
                        opacity: 0,
                        x: -80,
                        scale: 0.9,
                        rotation: 3
                    },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        rotation: 0,
                        ease: "power3.out",
                        duration: 0.6
                    }
                );
            }
        });
    });
});
document.querySelectorAll(".showpage").forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();

        gsap.to([login, register, home], {
            opacity: 0,
            x: -100,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1,
            onComplete: () => {
                register.classList.add("hidden");
                login.classList.add("hidden");
                kritik.classList.remove("hidden");
                home.classList.add("hidden");
                gsap.fromTo(
                    kritik,
                    {
                        opacity: 0,
                        x: 80,
                        scale: 0.9,
                        rotation: 3
                    },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        rotation: 0,
                        ease: "power3.out",
                        duration: 0.6
                    }
                );
            }
        });
    });
});
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", e => {
    e.preventDefault();

    const username = document.getElementById("nama");
    const email = document.getElementById("Email");
    const password = document.getElementById("Password");
    const confirm = document.getElementById("CPassword");
    const agree = document.getElementById("agree");
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");
    const agreeError = document.getElementById("agreeError");
    let isValid = true;
    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required.";
        usernameError.classList.remove("hidden");
        username.classList.remove("border-white/20");
        username.classList.remove("focus:ring-[#5FC2F6]");
        username.classList.add("border-red-500");
        username.classList.add("focus:ring-red-500");
        username.focus();
        isValid = false;
    } else if (username.value.length < 4) {
        usernameError.textContent = "Username must be at least 4 characters.";
        usernameError.classList.remove("hidden");
        username.classList.remove("border-white/20");
        username.classList.remove("focus:ring-[#5FC2F6]");
        username.classList.add("border-red-500");
        username.classList.add("focus:ring-red-500");
        username.focus();
        isValid = false;
    } else if (username.value.length > 20) {
        usernameError.textContent = "Username must not exceed 20 characters.";
        usernameError.classList.remove("hidden");
        username.classList.remove("border-white/20");
        username.classList.remove("focus:ring-[#5FC2F6]");
        username.classList.add("border-red-500");
        username.classList.add("focus:ring-red-500");
        username.focus();
        isValid = false;
    } else if (!/^[A-Za-z0-9_]+$/.test(username.value)) {
        usernameError.textContent =
            "Username can only contain letters, numbers, and underscores (_).";
        usernameError.classList.remove("hidden");
        username.classList.remove("border-white/20");
        username.classList.remove("focus:ring-[#5FC2F6]");
        username.classList.add("border-red-500");
        username.classList.add("focus:ring-red-500");
        username.focus();
        isValid = false;
    } else {
        usernameError.textContent = "";
        usernameError.classList.remove("hidden");
        username.classList.add("border-white/20");
        username.classList.add("focus:ring-[#5FC2F6]");
        username.classList.remove("border-red-500");
        username.classList.remove("focus:ring-red-500");
    }
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        emailError.classList.remove("hidden");
        email.classList.remove("border-white/20");
        email.classList.remove("focus:ring-[#5FC2F6]");
        email.classList.add("border-red-500");
        email.classList.add("focus:ring-red-500");
        isValid = false;
    } else if (email.value.includes(" ")) {
        emailError.textContent = "Email must not contain spaces.";
        emailError.classList.remove("hidden");
        email.classList.remove("border-white/20");
        email.classList.remove("focus:ring-[#5FC2F6]");
        email.classList.add("border-red-500");
        email.classList.add("focus:ring-red-500");
        isValid = false;
    } else if (email.value.length > 50) {
        emailError.textContent = "Email must not exceed 50 characters.";
        emailError.classList.remove("hidden");
        email.classList.remove("border-white/20");
        email.classList.remove("focus:ring-[#5FC2F6]");
        email.classList.add("border-red-500");
        email.classList.add("focus:ring-red-500");
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent =
            "Please enter a valid email address, example@gmail.com";

        emailError.classList.remove("hidden");
        email.classList.remove("border-white/20");
        email.classList.remove("focus:ring-[#5FC2F6]");
        email.classList.add("border-red-500");
        email.classList.add("focus:ring-red-500");
        isValid = false;
    } else {
        emailError.textContent = "";
        emailError.classList.add("hidden");
        email.classList.add("focus:ring-[#5FC2F6]");
        email.classList.remove("border-red-500");
        email.classList.remove("focus:ring-red-500");
    }
    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        passwordError.classList.remove("hidden");
        password.classList.remove("border-white/20");
        password.classList.remove("focus:ring-[#5FC2F6]");
        password.classList.add("border-red-500");
        password.classList.add("focus:ring-red-500");
        isValid = false;
    } else if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        passwordError.classList.remove("hidden");
        password.classList.remove("border-white/20");
        password.classList.remove("focus:ring-[#5FC2F6]");
        password.classList.add("border-red-500");
        password.classList.add("focus:ring-red-500");
        isValid = false;
    } else if (password.value.length > 32) {
        passwordError.textContent = "Password must not exceed 32 characters.";
        passwordError.classList.remove("hidden");
        password.classList.remove("border-white/20");
        password.classList.remove("focus:ring-[#5FC2F6]");
        password.classList.add("border-red-500");
        password.classList.add("focus:ring-red-500");
        isValid = false;
    } else if (password.value.includes(" ")) {
        passwordError.textContent = "Password must not contain spaces.";
        passwordError.classList.remove("hidden");
        password.classList.remove("border-white/20");
        password.classList.remove("focus:ring-[#5FC2F6]");
        password.classList.add("border-red-500");
        password.classList.add("focus:ring-red-500");
        isValid = false;
    } else {
        passwordError.textContent = "";
        passwordError.classList.add("hidden");
        password.classList.add("border-white/20");
        password.classList.add("focus:ring-[#5FC2F6]");
        password.classList.remove("border-red-500");
        password.classList.remove("focus:ring-red-500");
    }
    if (confirm.value.trim() === "") {
        confirmError.textContent = "Confirm Password is required.";
        confirmError.classList.remove("hidden");
        confirm.classList.remove("border-white/20");
        confirm.classList.remove("focus:ring-[#5FC2F6]");
        confirm.classList.add("border-red-500");
        confirm.classList.add("focus:ring-red-500");
        isValid = false;
    } else if (confirm.value !== password.value) {
        confirmError.textContent = "Passwords do not match.";
        confirmError.classList.remove("hidden");
        confirm.classList.remove("border-white/20");
        confirm.classList.remove("focus:ring-[#5FC2F6]");
        confirm.classList.add("border-red-500");
        confirm.classList.add("focus:ring-red-500");
        isValid = false;
    } else {
        confirmError.textContent = "";
        confirmError.classList.add("hidden");
        confirm.classList.add("border-white/20");
        confirm.classList.add("focus:ring-[#5FC2F6]");
        confirm.classList.remove("border-red-500");
        confirm.classList.remove("focus:ring-red-500");
    }
    if (!agree.checked) {
        agreeError.textContent = "You must agree to the Privacy Policy.";
        agreeError.classList.remove("hidden");
        isValid = false;
    } else {
        agreeError.textContent = "";
        agreeError.classList.add("hidden");
    }
    if (!isValid) return;
    gsap.to([login, register, home], {
        opacity: 0,
        x: -100,
        duration: 0.5,
        ease: "power3.out",
        onComplete: () => {
            register.classList.add("hidden");
            login.classList.add("hidden");
            home.classList.add("hidden");
            kritik.classList.remove("hidden");

            gsap.fromTo(
                kritik,
                {
                    opacity: 0,
                    x: 80,
                    scale: 0.9,
                    rotation: 3
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    rotation: 0,
                    duration: 0.6,
                    ease: "power3.out"
                }
            );
        }
    });
});
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("loginUsername");
    const pass = document.getElementById("loginPassword");
    const remenber = document.getElementById("remenber");
    const nameError = document.getElementById("loginUsernameError");
    const passError = document.getElementById("loginPasswordError");
    const remenberError = document.getElementById("remenberError");
    let isValid = true;
    if (name.value.trim() === "") {
        nameError.textContent = "Username is required.";
        nameError.classList.remove("hidden");
        name.classList.remove("border-white/20");
        name.classList.remove("focus:ring-[#5FC2F6]");
        name.classList.add("border-red-500");
        name.classList.add("focus:ring-red-500");
        name.focus();
        isValid = false;
    } else if (name.value.length < 4) {
        nameError.textContent = "Username must be at least 4 characters.";
        nameError.classList.remove("hidden");
        name.classList.remove("border-white/20");
        name.classList.remove("focus:ring-[#5FC2F6]");
        name.classList.add("border-red-500");
        name.classList.add("focus:ring-red-500");
        name.focus();
        isValid = false;
    } else if (name.value.length > 20) {
        nameError.textContent = "Username must not exceed 20 characters.";
        nameError.classList.remove("hidden");
        name.classList.remove("border-white/20");
        name.classList.remove("focus:ring-[#5FC2F6]");
        name.classList.add("border-red-500");
        name.classList.add("focus:ring-red-500");
        name.focus();
        isValid = false;
    } else if (!/^[A-Za-z0-9_]+$/.test(name.value)) {
        nameError.textContent =
            "Username can only contain letters, numbers, and underscores (_).";
        nameError.classList.remove("hidden");
        name.classList.remove("border-white/20");
        name.classList.remove("focus:ring-[#5FC2F6]");
        name.classList.add("border-red-500");
        name.classList.add("focus:ring-red-500");
        name.focus();
        isValid = false;
    } else {
        nameError.textContent = "";
        nameError.classList.remove("hidden");
        name.classList.add("border-white/20");
        name.classList.add("focus:ring-[#5FC2F6]");
        name.classList.remove("border-red-500");
        name.classList.remove("focus:ring-red-500");
    }

    if (pass.value.trim() === "") {
        passError.textContent = "Password is required.";
        passError.classList.remove("hidden");
        pass.classList.remove("border-white/20");
        pass.classList.remove("focus:ring-[#5FC2F6]");
        pass.classList.add("border-red-500");
        pass.classList.add("focus:ring-red-500");
        isValid = false;
    } else if (pass.value.length < 8) {
        passError.textContent = "Password must be at least 8 characters.";
        passError.classList.remove("hidden");
        pass.classList.remove("border-white/20");
        pass.classList.remove("focus:ring-[#5FC2F6]");
        pass.classList.add("border-red-500");
        pass.classList.add("focus:ring-red-500");
        isValid = false;
    } else if (pass.value.length > 32) {
        passError.textContent = "Password must not exceed 32 characters.";
        passError.classList.remove("hidden");
        pass.classList.remove("border-white/20");
        pass.classList.remove("focus:ring-[#5FC2F6]");
        pass.classList.add("border-red-500");
        pass.classList.add("focus:ring-red-500");
        isValid = false;
    } else if (pass.value.includes(" ")) {
        passError.textContent = "Password must not contain spaces.";
        passError.classList.remove("hidden");
        pass.classList.remove("border-white/20");
        pass.classList.remove("focus:ring-[#5FC2F6]");
        pass.classList.add("border-red-500");
        pass.classList.add("focus:ring-red-500");
        isValid = false;
    } else {
        passError.textContent = "";
        passError.classList.add("hidden");
        pass.classList.add("border-white/20");
        pass.classList.add("focus:ring-[#5FC2F6]");
        pass.classList.remove("border-red-500");
        pass.classList.remove("focus:ring-red-500");
    }

    if (!remenber.checked) {
        remenberError.textContent = "You must agree to the Privacy Policy.";
        remenberError.classList.remove("hidden");
        isValid = false;
    } else {
        remenberError.textContent = "";
        remenberError.classList.add("hidden");
    }
    if (!isValid) return;
    gsap.to([login, register, home], {
        opacity: 0,
        x: 100,
        duration: 0.5,
        ease: "power3.out",
        onComplete: () => {
            register.classList.add("hidden");
            login.classList.add("hidden");
            home.classList.add("hidden");
            kritik.classList.remove("hidden");

            gsap.fromTo(
                kritik,
                {
                    opacity: 0,
                    x: -80,
                    scale: 0.9,
                    rotation: 3
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    rotation: 0,
                    duration: 0.6,
                    ease: "power3.out"
                }
            );
        }
    });
});
const eyes = document.querySelectorAll(".toggle-password");

eyes.forEach(eye => {
    eye.addEventListener("click", () => {
        const passwordInput = eye.previousElementSibling;

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eye.textContent = "🙈";
        } else {
            passwordInput.type = "password";
            eye.textContent = "👁️";
        }

        gsap.fromTo(
            eye,
            {
                scale: 0.8,
                rotation: -30
            },
            {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "back.out(2)"
            }
        );
    });
});
for (let i = 0; i < 150; i++) {
    const flake = document.createElement("div");

    flake.className = "absolute rounded-full bg-white shadow-[0_0_8px_white]";

    const size = gsap.utils.random(2, 8);

    snow.appendChild(flake);

    function fall() {
        gsap.set(flake, {
            width: size,
            height: size,
            x: gsap.utils.random(0, window.innerWidth),
            y: gsap.utils.random(-window.innerHeight, window.innerHeight),
            opacity: gsap.utils.random(0.4, 1)
        });

        gsap.to(flake, {
            y: window.innerHeight + 30,
            x: "+=" + gsap.utils.random(-60, 60),
            rotation: gsap.utils.random(-360, 360),
            duration: gsap.utils.random(6, 12),
            ease: "none",
            onComplete: fall
        });
    }

    fall();
}
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

music.loop = true;
music.volume = 0.15;

let playing = false;
let rotateAnim = null;

musicBtn.addEventListener("click", () => {
    if (!playing) {
        music.play();

        rotateAnim = gsap.to(musicBtn, {
            rotation: "+=360",
            duration: 10,
            repeat: -1,
            ease: "none"
        });

        gsap.to(musicBtn, {
            boxShadow: "0 0 25px #5FC2F6",
            scale: 1.2,
            duration: 0.2
        });

        musicBtn.textContent = "🎵";
        playing = true;
    } else {
        music.pause();

        if (rotateAnim) rotateAnim.kill();

        gsap.to(musicBtn, {
            rotation: 0,
            boxShadow: "0 0 10px #5FC2F6",
            scale: 1,
            duration: 0.3
        });

        musicBtn.textContent = "🔇";
        playing = false;
    }
});
