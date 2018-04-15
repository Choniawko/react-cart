import { Observable } from 'rxjs'
import "rxjs/add/observable/dom/ajax"

export const getProducts = () => 
    Observable.ajax.get("http://localhost:3000/products")
        .map(res => res.response)