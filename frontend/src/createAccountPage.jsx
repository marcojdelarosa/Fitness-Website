
// lay out web page
export default function CreateAccountPage() {
    return (
        <div className="container">
            <TextField />
            <TextField id="right"/>
        </div>
        
    );
}

// procedure to create the title field
function TextField() {
    return (
        <div className="flex-container">
            <h1>Section Title</h1>
            <Textbox />
            <Textbox />
            <Textbox />
            <SubmitButton />
        </div>
    );
}

// lay out each title and input field
function Textbox() {
    return (
        <div className="flex-item">
            <p>Title</p>
            <input />
        </div>
    );
}

function SubmitButton() {
    return (
        <div>
            <button className="submitButton">Submit</button>
        </div>
    )
}