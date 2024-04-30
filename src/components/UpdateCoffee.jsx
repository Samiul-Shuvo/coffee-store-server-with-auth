import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

    const handleUpdateCoffee = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(updatedCoffee)

        // Send data to server 
        fetch(`https://coffee-store-server-opyzejiic-samiul-shuvos-projects.vercel.app/coffee/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        })
    }

    return (
        <div  className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Update coffee : {name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* Form Row name and quantity */}
       <div className="md:flex mb-8">
       <label className="input md:w-1/2 input-bordered flex items-center gap-2">
          Name
          <input type="text" name="name" className=" md:w-full" defaultValue={name} placeholder="Coffee Name" />
        </label>
       <label className="input md:w-1/2 input-bordered flex items-center gap-2 ml-4">
        Quantity
          <input type="text" name="quantity" defaultValue={quantity} className="md:w-full" placeholder=" Available Quantity" />
        </label>
     
       </div>
        {/* Form Row  supplier and taste*/}
       <div className="md:flex mb-8">
       <label className="input md:w-1/2 input-bordered flex items-center gap-2">
          Supplier
          <input type="text" defaultValue={supplier} name="supplier" className=" md:w-full" placeholder="Supplier " />
        </label>
       <label className="input md:w-1/2 input-bordered flex items-center gap-2 ml-4">
        Taste
          <input type="text" name="taste" defaultValue={taste} className="md:w-full" placeholder="Taste" />
        </label>
     
       </div>
        {/* Form Row category and details */}
       <div className="md:flex mb-8 ">
       <label className="input block md:w-1/2 input-bordered  items-center gap-2">
          Catergory
          <input type="text" name="category" defaultValue={category} className=" md:w-full" placeholder="Category" />
        </label>
       <label className="input md:w-1/2 input-bordered flex items-center gap-2 ml-4">
        Details
          <input type="text" name="details" defaultValue={details} className="md:w-full" placeholder="Details" />
        </label>
     
       </div>
           {/* Form photo url  Row  */}
           <div className=" mb-8">
       <label className="input w-full input-bordered flex items-center gap-2">
          Photo
          <input type="text" name="photo" defaultValue={photo} className=" md:w-full" placeholder="Photo URL" />
        </label>
       </div>
       <input type="submit" value="Update Coffee"  className="btn btn-block border bg-gray-400"/>
      </form>
    </div>
    );
};

export default UpdateCoffee;