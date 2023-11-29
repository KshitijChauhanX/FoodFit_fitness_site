import { useEffect } from "react"
import { useState } from "react"
import yoga from './assets/yoga.png'
import weightlift from './assets/weightlifter.png'
import walking from './assets/walking.png'
import running from './assets/running.png'

export default function CalorieTracker() {

    const [food, setFood] = useState('')
    const [data, setData] = useState()

    const handleChange = (event) => {
        setFood(event.target.value)
    }

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${food}`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': '+zAALX9H3YS5tu1qXClInw==cxLfyKV3TB6BnAXt'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setData(await response.json())
            console.log(data)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <div className="bmi container center">
                <h1>Calorie Tracker</h1>
                <input className="inputfood" placeholder="Food Item" onChange={handleChange} value={food}></input>
                <button className="btn inputfood" onClick={fetchData}>Search</button>
            </div> 

            <div className="ct-tables">
                {data && (<div className="bmi container ct-table1">
                    <h1 className="nu-heading">Nutritional Values</h1>
                    <ul className="nu-list">
                        <li>Serving Size per 100/Grams <span></span></li>
                        <li>Carbohydrates: {data[0].carbohydrates_total_g}</li>
                        <li>Cholesterol: {data[0].cholesterol_mg}</li>
                        <li>Saturated fat: {data[0].fat_saturated_g}</li>
                        <li>Total Fat: {data[0].fat_saturated_g}</li>
                        <li>Fiber Content: {data[0].fat_total_g}</li>
                        <li>Potassium: {data[0].potassium_mg}</li>
                        <li>Protein: {data[0].protein_g}</li>
                        <li>Sodium: {data[0].sodium_mg}</li>
                        <li>Sugar: {data[0].sugar_g}</li>
                    </ul>
                </div>)
                }
                {data && (<div className="bmi container">
                    <div className="ex-item"> <div>
                        <img className="expic" src={running} alt="..." />
                    </div>
                        <div className="data1">
                            <h5> Jog </h5>
                            <p>you will have to jog for <strong> {(data[0].calories / 378 * 60).toFixed(2)} </strong> Minutes</p>
                        </div> </div>

                    <div className="ex-item"> <div>
                        <img className="expic" src={yoga} alt="..." />
                    </div>
                        <div className="data2">
                            <h5> Do Power Yoga </h5>
                            <p className="data">you will have to Power Yoga for <strong> {(data[0].calories / 223 * 60).toFixed(2)} </strong> Minutes</p>
                        </div></div>


                    <div className="ex-item"> <div>
                        <img className="expic" src={weightlift} alt="..." />
                    </div>
                        <div className="data3">
                            <h5>Get a Gym Workout </h5>
                            <p className="data">you will have to lift weight for <strong> {(data[0].calories / 483 * 60).toFixed(2)} </strong> Minutes </p>
                        </div>
                    </div>

                    <div className="ex-item"> <div>
                        <img className="expic" src={walking} alt="..." />
                    </div>
                        <div className="data4">
                            <h5> Go for a Brisk Walk </h5>
                            <p className="data">you will have to brisk walk for <strong> {(data[0].calories / 294 * 60).toFixed(2)}  </strong> Minutes</p>
                        </div></div>

                </div>)
                }
            </div>
        </>
    )
}