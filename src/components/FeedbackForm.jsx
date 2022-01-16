import { useState } from "react"
import Button from "./Button"
import Form from "./shared/Form"

function FeedbackForm() {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Form>
            <div className="container">
                <form>
                    <h2>How would you rate your service with us?</h2>
                    {/* @todo = rating select component */}
                    <div className="input-group">
                        <input onChange={handleTextChange} type="text" placeholder="Write a review" className="text" value={text} />
                        <Button type='submit'>Send</Button>              
                    </div>
                </form>
            </div>
        </Form>
    )
}

export default FeedbackForm
