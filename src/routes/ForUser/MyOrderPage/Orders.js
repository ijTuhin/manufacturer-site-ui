import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Orders = ({ allorder }) => {
    const [user] = useAuthState(auth);
    const {
        _id,
        itemname,
        order,
        totalprice,
        paid,
    } = allorder;



    const handleConfirm = () => {
        const paid = "done";
        const updated = {itemname, order, totalprice, paid};
        const url = `https://dry-journey-38445.herokuapp.com/order/${user.email}/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                console.log('Payment Done for Product --', itemname, paid)
            })
        
    };
    const handleCancel = () => {
        console.log(itemname,' Item deleted from Cart');
        const url = `https://dry-journey-38445.herokuapp.com/order/${user.email}/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    console.log(itemname,' Item deleted from Cart');
                })
    }


    return (
        <tr class="bg-white border-b transition duration-300 ease-in-out">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">{_id}</td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                {itemname}
            </td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                {order}
            </td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                ${totalprice}
            </td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                {
                    paid ?
                        <>
                            <p>Purchased</p>
                        </>
                        :
                        <>
                            <form>
                                <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal" className='border hover:bg-red-600 hover:text-white bg-white rounded text-red-600 px-4 py-2 mr-2'>Cancel</button>
                            <button type='submit' onClick={handleConfirm} className='border hover:bg-green-700 bg-green-600 text-white rounded px-4 py-2'>Confirm</button>
                            <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                        id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog relative w-auto pointer-events-none">
                            <div
                                class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                <div class="modal-body relative p-4">
                                    Remove {itemname} from Cart?
                                </div>
                                <div
                                    class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-2 rounded-b-md">
                                    <button type="button" class="px-6
          py-2.5
          bg-red-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-red-700 hover:shadow-lg
          focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-red-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Cancel</button>
                                    <button type='submit' onClick={handleCancel} class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1" data-bs-dismiss="modal">Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                            </form>
                        </>
                }
            </td>
        </tr>
    );
};

export default Orders;