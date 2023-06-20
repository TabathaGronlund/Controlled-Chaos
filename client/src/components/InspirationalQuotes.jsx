import React from 'react'
import { Link } from 'react-router-dom'

const InspirationalQuotes = () => {
    return (
        <div className='quote-container'>
            <Link to={`/`}>Home</Link>
            <div>
            <h1 className='header-quote'>A truly happy person is one who can enjoy the scenery while on a detour.</h1>
            <p className='coral'>"If it was super easy, everyone would be doing it! so, the less you beat yourself up, the more fun it will be!"
                <br></br>
                -Christina Torres</p>
            <p className='blue'>Success is the sum of small <br></br>efforts repeated day in and day out.
            <br></br>
            -Robert Collier</p>
            <p className='coral'>You’re braver than you believe, <br></br>and stronger than you seem, and smarter than you think.
                <br></br>
                -A.A. Mine</p>
            <p className='blue'>Keep your face to the sunshine<br></br> and you cannot see a shadow.
                <br></br>
                -Helen Keller</p>
            <p className='coral'>Happiness is the only thing that multiplies when you share it.
                <br></br>
                -Albert Schweitzer</p>
            <p className='blue'>The more you praise and celebrate your life,<br></br> the more there is in life to celebrate.
                <br></br>
                -Oprah Winfrey</p>
            <p className='coral'>if you want the rainbow, you gotta put up with the rain.
                <br></br>
                -Dolly Parton</p>
            <p className='blue'>Let your unique awesomeness<br></br> and positive energy inspire confidence in others.</p>
            <p className='coral'>No one is perfect – that’s why pencils have erasers.
                <br></br>
                -Wolfgang Riebe</p>
            <p className='blue'>The sun himself is weak when he first rises,<br></br> and gathers strength and courage<br></br> as the day gets on.
                <br></br>
                -Charles Dickens</p>
            <p className='coral'>When you are enthusiastic about what you do, you feel this positive energy. It’s very simple.
                <br></br>
                -Paulo Coelho</p>
            <p className='blue'>You always pass failure on the way to success.
                <br></br>
                -Mickey Rooney</p>
            <p className='coral'>It always seems impossible until it is done.
                <br></br>
                -Nelson Mandela</p>
                </div>
        <div>
            <Link to={`/`}>Alright, enough inspiration!</Link>
        </div>
        </div>
    )
}

export default InspirationalQuotes
