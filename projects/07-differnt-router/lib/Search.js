import{jsxs as _jsxs}from"react/jsx-runtime";import{useEffect}from"react";export default function SearchPage({routeParams}){useEffect(()=>{document.title=`Has buscado ${routeParams.query}`},[]);return _jsxs("h1",{children:["Buscador ",routeParams.query]})}