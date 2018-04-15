import { Observable } from 'rxjs'
import "rxjs/add/observable/dom/ajax"

const baseUrl = endpoint => `http://localhost:3000/${endpoint}`

export const getProducts = () => 
    Observable.ajax.get(baseUrl("products"))
        .map(res => res.response)

export const searchProduct = (term) =>
    Observable.ajax.get(baseUrl(`products?q=${term}`))
        .map(res => res.response)