


const Profile = () => {

    /* Preset Tailwind styles */

    const containerClass = "flex flex-col justify-center items-center my-4";
    const cardClass = "max-w-xs p-5 text-center rounded-xl bg-slate-400 shadow-lg";
    const avatarClass = "w-85 mb-5 rounded-full";
    const bioClass = "mt-2 flex justify-center gap-5";
    const buttonsClass = "mt-5 flex gap-2.5 justify-center";
    const profileButton = "py-2 px-4 cursor-pointer";



    const handleGoHome = () => {

    };

    const handleLogout = () => {

    };

    
    return(
<>
    <section className={containerClass}>

            <h1 className='font-bold text-3xl text-white-600/75 m-6'>User Profile</h1>

            <div className={cardClass}>

                <img
                src="https://i.pravatar.cc/150"
                alt="user avatar"
                className={avatarClass}/>

                <h2>UserName</h2>
                <p>lele@lele.com</p>
                <p className={bioClass}>Info Bio User: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi tempora reprehenderit eius nihil quo a non voluptas temporibus aut ullam assumenda dignissimos nam, eligendi ut!</p>

                <div className={buttonsClass}>
                    <button 
                        onClick={handleGoHome}
                        className={profileButton}>Go Home
                    </button>
                    <button 
                        onClick={handleLogout}
                        className={profileButton}>Log out
                    </button>
                </div>

            </div>

    </section>

</>
);
};

export default Profile;