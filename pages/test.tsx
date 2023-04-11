interface IAccount {
    name:string;
    email:string;
}

export default function Test () {
    return (
    <form>
        <h1 className='text-2xl'>Create Account</h1>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" />
        <br />
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
        <br />
        <input className="cursor-pointer bg-slate-300 rounded-md" type="submit" value="create Account" />
    </form>
    );
}
