// import  React from 'react'

function Card({username, btntext}) {
    console.log(username); // or written as console.log(props.username)
    return (
        <div className="relative h-[400px] w-[300px] m-5 rounded-md">
            <img
                src="teshra1.jpg"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{username}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    {btntext} →
                </button>
            </div>
        </div>

    )
}

export default Card
