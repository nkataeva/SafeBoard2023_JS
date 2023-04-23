import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Select } from "./Panel.styled"

export const Choice = () => {
    return (
        <select className="form-select form-select-lg mb-3 text-bg-dark p-3" aria-label=".form-select-lg пример">
            <option selected>Откройте это меню выбора</option>
            <option value="1">Один</option>
            <option value="2">Два</option>
            <option value="3">Три</option>
        </select>
    )
}