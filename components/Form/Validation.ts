export function validName(name: string) {
        const validNamePattern = /^[A-Za-z\s]+$/;
        return !(!name.match(validNamePattern) || !name.trim());

}

export function validEmail(email: string) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return emailPattern.test(email);
}


export function validPassword(password: string) {
       return (password.length < 8) ? false: true;
}


