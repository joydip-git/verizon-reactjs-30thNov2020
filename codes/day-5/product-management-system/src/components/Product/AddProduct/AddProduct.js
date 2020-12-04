import React, { Component } from 'react'

export default class AddProduct extends Component {

    state = {
        idInputElement: {
            value: 0,
            name: 'productId',
            error: null
        },
        nameInputElement: {
            value: '',
            name: 'productName',
            error: null
        },
        codeInputElement: {
            value: '',
            name: 'productCode',
            error: null
        },
        descInputElement: {
            value: '',
            name: 'description',
            error: null
        },
        dateInputElement: {
            value: '',
            name: 'releaseDate',
            error: null
        },
        priceInputElement: {
            value: 0,
            name: 'price',
            error: null
        },
        ratingInputElement: {
            value: 0,
            name: 'starRating',
            error: null
        },
        imageInputElement: {
            value: '',
            name: 'imageUrl',
            error: null
        },
    }

    render() {
        let design = (
            <div className="container">
                <form className="form-horizontal">

                    <div className="form-group">
                        <label htmlFor="productId" className="col-sm-2 control-label">Id:</label>
                        <div className="col-sm-10">
                            <input type='number'
                                className="form-control"
                                value=''
                                name='productId'
                                id='productId'
                                onChange={(e) => { }}
                                placeholder="product id" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="productName" className="col-sm-2 control-label">Name:</label>
                        <div className="col-sm-10">
                            <input type='text'
                                value=''
                                className="form-control"
                                id="productName"
                                name='productName'
                                placeholder="product name"
                                onChange={(e) => { }} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="productCode" className="col-sm-2 control-label">Code:</label>
                        <div className="col-sm-10">
                            <input type='text'
                                value={this.state.productCode}
                                className="form-control"
                                id="productCode"
                                name="productCode"
                                placeholder="product code"
                                onChange={(e) => { }} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="releaseDate" className="col-sm-2 control-label">Release Date:</label>
                        <div className="col-sm-10">
                            <input
                                type='date'
                                value={this.state.releaseDate}
                                className="form-control" id="releaseDate" name="releaseDate" placeholder="product release date"
                                onChange={(e) => { }} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className="col-sm-2 control-label">Description:</label>
                        <div className="col-sm-10">
                            <input
                                type='textarea'
                                value={this.state.description}
                                className="form-control" id="description" name="description" placeholder="product description"
                                onChange={(e) => { }}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="price" className="col-sm-2 control-label">Price:</label>
                        <div className="col-sm-10">
                            <input
                                type='number'
                                value={this.state.price}
                                className="form-control" id="price" name="price" placeholder="product price"
                                onChange={(e) => { }}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="starRating" className="col-sm-2 control-label">Star Rating:</label>
                        <div className="col-sm-10">
                            <input type='number'
                                value={this.state.starRating}
                                className="form-control" id="starRating" name="starRating" placeholder="product Rating"
                                onChange={(e) => { }} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="imageUrl" className="col-sm-2 control-label">Image URL:</label>
                        <div className="col-sm-10">
                            <input
                                type='text'
                                value={this.state.imageUrl}
                                className="form-control" id="imageUrl" name="imageUrl" placeholder="product release date"
                                onChange={(e) => { }} />
                        </div>
                    </div>
                    <div className="container-fluid"
                        style={{ textAlign: "center" }}>

                        <input type="submit" className="btn btn-primary" value="Add" />
                        &nbsp;&nbsp;&nbsp;
                        <button type="submit" className="btn btn-alert">Cancel</button>

                    </div>

                </form>
            </div>

        )
        return design;
    }
}
