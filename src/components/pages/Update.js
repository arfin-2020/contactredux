import React from 'react'

const Update = () => {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='display-3 text-center'>Update Student Details</h1>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <form>
                        <div className='form-group my-3'>
                            <input type='text' placeholder='Name' className='form-control' />
                        </div>
                    </form>
                </div>
            </div>
            <h1>It's a update page</h1>
        </div>
    )
}

export default Update
