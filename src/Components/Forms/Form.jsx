const Form = ({ changeFirstName, changeLastName, changeTextArea }) => {
    return (
        <div>

            <input type="text" className="form-control mb-2" placeholder="firsName" onChange={(e) => changeFirstName(e)} />

            <input type="text" className="form-control" placeholder="lastName" onChange={(e) => changeLastName(e)} />

            <div className="mb-3">
                <label htmlFor="textArea" className="form-label mt-4">Text-Area</label>
                <textarea className="form-control" name="textArea" id="textArea" rows="3" onChange={(e) => changeTextArea(e)} />
            </div>

        </div>
    );
};

export default Form;




