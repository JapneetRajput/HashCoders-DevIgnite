import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Added to Your Schedule!');

const MathPage = () => {
    const [unitStates, setUnitStates] = useState(units.map(unit => ({ unit, selected: false, intensity: '' })));

    const handleUnitSelect = (unit) => {
        setUnitStates(unitStates.map(item => {
            if (item.unit === unit) {
                return { ...item, selected: !item.selected };
            }
            return item;
        }));
    };

    const handleIntensityChange = (unit, intensity) => {
        setUnitStates(unitStates.map(item => {
            if (item.unit === unit) {
                return { ...item, intensity };
            }
            return item;
        }));
    };

    const isAddToScheduleDisabled = unitStates.every(unit => !unit.selected || unit.intensity === '');

    return (
        <div className="relative w-full px-6 pt-10 pb-8 mt-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
            <div className="px-5 mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="mt-5 text-2xl font-bold tracking-tight text-center md:text-4xl">MATH SYLLABUS</h2>
                    <p className="mt-3 text-lg text-neutral-500 md:text-xl">C.B.S.E Board (2023-2024)</p>
                </div>
                <div className="grid max-w-xl mx-auto mt-8 divide-y divide-neutral-200">
                    {unitStates.map((unitState, index) => (
                        <div key={index} className="flex items-center justify-between py-5">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={unitState.selected}
                                    onChange={() => handleUnitSelect(unitState.unit)}
                                />
                                <span className='mx-2 text-sm text-start'>{unitState.unit}</span>
                            </label>
                            <select
                                className="px-3 py-1 border rounded-md"
                                value={unitState.intensity}
                                onChange={(e) => handleIntensityChange(unitState.unit, e.target.value)}
                            >
                                <option value="">Intensity</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <button
                        type="submit" onClick={notify}
                        className={`shadow-none w-full mb-4 hover:text-[#313638] text-white border-[#232323] hover:bg-white bg-[#313638] border hover:border-[#313638] rounded-lg h-10 mt-8 ${
                            isAddToScheduleDisabled ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={isAddToScheduleDisabled}
                    >
                        Add to Schedule
                        <Toaster />
                    </button>
                </div>
            </div>
        </div>
    );
};

const units = [
    "Unit I: Relations and Functions",
    "Unit II: Algebra",
    "Unit III: Calculus",
    "Unit IV: Vectors and Three - Dimensional Geometry",
    "Unit V: Linear Programming",
    "Unit VI: Probability"
];

export default MathPage;
