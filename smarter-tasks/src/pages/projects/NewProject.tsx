import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
};

const NewProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name } = data;
    const token = localStorage.getItem('authToken') ?? '';

    try {
      const response = await fetch(`${API_ENDPOINT}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        throw new Error('Failed to create project');
      }

      const responseData = await response.json();
      console.log(responseData);

      setIsOpen(false);
    } catch (error) {
      console.error('Operation failed:', error);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        New Project
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="inline-block align-middle my-8 p-6 max-w-md w-full overflow-hidden text-left align-middle transition-all transform bg-blue-100 shadow-xl rounded-2xl">
              <Dialog.Title as="h3" className="text-lg bg-blue-100 font-medium leading-6">
                Create New Project !
              </Dialog.Title>

              <div className="mt-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="Enter project name..."
                    autoFocus
                    {...register('name', { required: true })}
                    className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.name && <span className="text-red-500">This field is required</span>}
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NewProject;
