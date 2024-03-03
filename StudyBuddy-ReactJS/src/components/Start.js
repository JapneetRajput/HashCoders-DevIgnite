import React, { useContext, useState } from 'react';

const Start = () => {
    const [step, setStep] = useState(1);
    return (
    <>
        <div className="w-[95%] mx-auto my-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700">
            <div className="text-center">
                <h1 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100">
                    Chemistry Quiz
                </h1>
                <div className="w-full h-1 mx-auto mb-4 bg-blue-500 rounded-full dark:bg-blue-300"></div>
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    Step {step} of 4
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                {step === 1 && (
                    <div className="flex flex-col space-y-4">
                        <div className="w-1/3 h-2 mx-auto mt-1 mb-6 bg-gray-200 rounded-full dark:bg-gray-600">
                            <div className="w-1/4 h-full text-center text-white bg-green-600 rounded-full dark:bg-green-400"></div>
                        </div>
                        <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                            Question 1
                        </label>
                        <div className='text-sm text-center'>What is your name?</div>
                        <div className="relative bg-gray-100 border rounded-lg dark:bg-gray-600"></div>
                        <fieldset class="space-y-4">
                            <legend class="sr-only">Delivery</legend>

                            <div>
                                <label
                                    for="DeliveryStandard"
                                    class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                >
                                    <div>
                                        <p class="text-gray-700">Standard</p>

                                        <p class="mt-1 text-gray-900">Free</p>
                                    </div>

                                    <input
                                        type="radio"
                                        name="DeliveryOption"
                                        value="DeliveryStandard"
                                        id="DeliveryStandard"
                                        class="size-5 border-gray-300 text-blue-500"
                                        checked
                                    />
                                </label>
                            </div>

                            <div>
                                <label
                                    for="DeliveryPriority"
                                    class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                >
                                    <div>
                                        <p class="text-gray-700">Next Day</p>

                                        <p class="mt-1 text-gray-900">£9.99</p>
                                    </div>

                                    <input
                                        type="radio"
                                        name="DeliveryOption"
                                        value="DeliveryPriority"
                                        id="DeliveryPriority"
                                        class="size-5 border-gray-300 text-blue-500"
                                    />
                                </label>
                            </div>
                        </fieldset>
                    </div>

                )}
                {step === 2 && (
                    <div className="flex flex-col ">
                        <div className="w-1/3 h-2 mx-auto mt-1 mb-6 bg-gray-200 rounded-full dark:bg-gray-600">
                            <div className="w-2/4 h-full text-center text-white bg-green-600 rounded-full dark:bg-green-400"></div>
                        </div>


                        <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                            Question 1
                        </label>
                        <div className='text-sm text-center'>What is your name?</div>
                        <div className="relative bg-gray-100 border rounded-lg dark:bg-gray-600"></div>
                        <fieldset class="space-y-4">
                            <legend class="sr-only">Delivery</legend>

                            <div>
                                <label
                                    for="DeliveryStandard"
                                    class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                >
                                    <div>
                                        <p class="text-gray-700">Standard</p>

                                        <p class="mt-1 text-gray-900">Free</p>
                                    </div>

                                    <input
                                        type="radio"
                                        name="DeliveryOption"
                                        value="DeliveryStandard"
                                        id="DeliveryStandard"
                                        class="size-5 border-gray-300 text-blue-500"
                                        checked
                                    />
                                </label>
                            </div>

                            <div>
                                <label
                                    for="DeliveryPriority"
                                    class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                >
                                    <div>
                                        <p class="text-gray-700">Next Day</p>

                                        <p class="mt-1 text-gray-900">£9.99</p>
                                    </div>

                                    <input
                                        type="radio"
                                        name="DeliveryOption"
                                        value="DeliveryPriority"
                                        id="DeliveryPriority"
                                        class="size-5 border-gray-300 text-blue-500"
                                    />
                                </label>
                            </div>
                        </fieldset>
                    </div>
                )}

                {step === 3 && (
                    <div className="flex flex-col space-y-4">
                        <div className="w-1/3 h-2 mx-auto mt-1 mb-6 bg-gray-200 rounded-full dark:bg-gray-600">
                            <div className="w-3/4 h-full text-center text-white bg-green-600 rounded-full dark:bg-green-400"></div>
                        </div>

                        <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                            Question 1
                        </label>
                        <div className='text-sm text-center'>What is your name?</div>
                        <div className="relative bg-gray-100 border rounded-lg dark:bg-gray-600"></div>
                        <fieldset class="space-y-4">
                            <legend class="sr-only">Delivery</legend>

                            <div>
                                <label
                                    for="DeliveryStandard"
                                    class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                >
                                    <div>
                                        <p class="text-gray-700">Standard</p>

                                        <p class="mt-1 text-gray-900">Free</p>
                                    </div>

                                    <input
                                        type="radio"
                                        name="DeliveryOption"
                                        value="DeliveryStandard"
                                        id="DeliveryStandard"
                                        class="size-5 border-gray-300 text-blue-500"
                                        checked
                                    />
                                </label>
                            </div>

                            <div>
                                <label
                                    for="DeliveryPriority"
                                    class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                >
                                    <div>
                                        <p class="text-gray-700">Next Day</p>

                                        <p class="mt-1 text-gray-900">£9.99</p>
                                    </div>

                                    <input
                                        type="radio"
                                        name="DeliveryOption"
                                        value="DeliveryPriority"
                                        id="DeliveryPriority"
                                        class="size-5 border-gray-300 text-blue-500"
                                    />
                                </label>
                            </div>
                        </fieldset>
                    </div>
                )}

                {step === 4 && (
                    <div className="flex flex-col w-full space-y-4">
                        <div className="w-1/3 h-2 mx-auto mt-1 mb-6 bg-gray-200 rounded-full dark:bg-gray-600">
                            <div className="h-full text-center text-white bg-green-600 rounded-full w-4/4 dark:bg-green-400"></div>
                        </div>
                        <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                            Question 1
                        </label>
                        <div className='text-sm text-center'>What is your name?</div>
                        <div className="relative bg-gray-100 border rounded-lg dark:bg-gray-600"></div>
                        <fieldset class="space-y-4">
                            <legend class="sr-only">Delivery</legend>

                            <div>
                                <label
                                    for="DeliveryStandard"
                                    class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                >
                                    <div>
                                        <p class="text-gray-700">Standard</p>

                                        <p class="mt-1 text-gray-900">Free</p>
                                    </div>

                                    <input
                                        type="radio"
                                        name="DeliveryOption"
                                        value="DeliveryStandard"
                                        id="DeliveryStandard"
                                        class="size-5 border-gray-300 text-blue-500"
                                        checked
                                    />
                                </label>
                            </div>

                            <div>
                                <label
                                    for="DeliveryPriority"
                                    class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                                >
                                    <div>
                                        <p class="text-gray-700">Next Day</p>

                                        <p class="mt-1 text-gray-900">£9.99</p>
                                    </div>

                                    <input
                                        type="radio"
                                        name="DeliveryOption"
                                        value="DeliveryPriority"
                                        id="DeliveryPriority"
                                        class="size-5 border-gray-300 text-blue-500"
                                    />
                                </label>
                            </div>
                        </fieldset>
                    </div>
                )}
            </div>
            <div className="flex justify-between mt-8">
                {step > 1 && (
                    <button
                        onClick={() => setStep(step - 1)}
                        className="px-4 py-2 font-medium text-gray-500 bg-transparent rounded-lg shadow-none hover:text-gray-700 dark:text-gray-300"
                    >
                        Previous
                    </button>
                )}
                {step < 4 && (
                    <button
                        onClick={() => setStep(step + 1)}
                        className="px-4 py-2 font-medium text-white bg-[#3B7BD3] border rounded-lg shadow-none focus:outline-none hover:bg-[#3B7BD3]/80"
                    >
                        Next &nbsp; &rarr;
                    </button>
                )}
                {step === 4 && (
                    <button
                        className="px-4 py-2 font-medium text-white bg-green-600 border rounded-lg shadow-none focus:outline-none hover:bg-green-700 dark:bg-green-400"
                        type="submit"
                    >
                        <div style={{ display: "flex", justifyContent: "center" }}>
                        </div> Submit
                    </button>
                )}
            </div>
        </div>
    </>
    );
};

export default Start;