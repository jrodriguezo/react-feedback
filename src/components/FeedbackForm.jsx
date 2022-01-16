import { useState } from "react"
import Button from "./Button"
import Form from "./shared/Form"
import RatingSelect from "./RatingSelect"

function FeedbackForm({select}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

    return (
        <Form>
            <div className="container">
                <form>
                    <h2>How would you rate your service with us?</h2>
                    <RatingSelect select={(rating) => setRating(rating)}/>
                    <div className="input-group">
                        <input onChange={handleTextChange} type="text" placeholder="Write a review" className="text" value={text} />
                        <Button type='submit' isDisabled={btnDisabled}>Send</Button>              
                    </div>
                    {message && <div className="message">{message}</div>}
                </form>
            </div>
        </Form>
    )
}

export default FeedbackForm
