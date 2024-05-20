import React from 'react';
import Card from './Card';
import '../../CSS/Project.css'


export default function Project() {
  return (
    <>
     <div id='/Project' className="mainDiv">

     <div>
       <Card 
         title="Music Application" 
         description="Skills=>React State Management ,API." 
         imageUrl="image/music.jpg"
       />
     </div>

    
     <div className=''>
       <Card 
         title="Weather Application" 
         description="Skills=>React State Management, API." 
         imageUrl='image\weather.jpg'
       />
     </div>

    
     <div>
       <Card 
         title="ToDo List" 
         description="Skills=>React State Management, Component Lifecycle, And Handling Form." 
         imageUrl="image/todoList.png"
       />
     </div>

     <div>
       <Card 
         title="Product Catalog" 
         description="Skills=>React Component, State Management, Basic E-Commerce Functionality." 
         imageUrl="image/ProductCatalog.png"
       />
     </div>

     <div>
       <Card 
         title="Sample Calculator" 
         description="Skills=>JavaScript ,HTML ,CSS." 
         imageUrl="image/Calculator.png"
       />
     </div>

     <div>
       <Card 
         title="Sample Age Calculator" 
         description="Skills=>JavaScript ,HTML ,CSS." 
         imageUrl="image/AgeCalculator.png"
       />
     </div>

   
     </div>
    </>
  );
}