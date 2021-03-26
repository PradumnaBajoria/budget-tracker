import React from 'react'

const AddExpenseForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-sm">
                    <label for="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        required="required" 
                    />
                </div>
                <div className="col-sm">
                    <label for="cost">Cost</label>
                    <input
                        type="text"
                        className="form-control"
                        id="id"
                        required="required" 
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <button type="submit" className="btm btn-primary mt-3">
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm
