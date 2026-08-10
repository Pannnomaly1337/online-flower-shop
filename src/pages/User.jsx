import { useState } from "react";

const STORAGE_KEY = "flower-shop-profile";
const defaultProfile = { name: "Guest User", email: "guest@example.com", phone: "", address: "" };

const fields = [
    { label: "Full name", name: "name", type: "text", placeholder: "Your name" },
    { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
    { label: "Phone", name: "phone", type: "tel", placeholder: "08x-xxx-xxxx" },
    { label: "Address", name: "address", type: "text", placeholder: "Shipping address" },
];

export default function User ()
{
    const [profile, setProfile] = useState(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : defaultProfile;
        } catch {
            return defaultProfile;
        }
    });
    const [form, setForm] = useState(profile);
    const [saved, setSaved] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setSaved(false);
    };

    const handleSave = (event) => {
        event.preventDefault();
        // TODO: when a backend exists, PUT this profile to the API instead of localStorage.
        setProfile(form);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
        } catch {
            // ignore
        }
        setSaved(true);
    };

    const initials = (form.name || "U").trim().split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

    return (
        <div className="w-full bg-white min-h-screen px-6 sm:px-10 lg:px-20 py-10">
            <p className="text-3xl sm:text-4xl font-bold mb-8">My Account</p>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* profile summary card */}
                <div className="w-full lg:w-80 h-fit bg-(--main-light) rounded-md p-8 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-(--main-dark) text-white flex justify-center items-center text-3xl font-bold">{initials}</div>
                    <p className="text-2xl font-bold mt-4">{profile.name || "Guest User"}</p>
                    <p className="text-(--fade-color) break-all">{profile.email}</p>
                </div>

                {/* right column */}
                <div className="flex-1 flex flex-col gap-10">
                    <div>
                        <p className="text-2xl font-bold mb-4">Account Information</p>
                        <form onSubmit={handleSave} className="flex flex-col gap-4 max-w-xl">
                            {fields.map((field) => (
                                <label key={field.name} className="flex flex-col gap-1">
                                    <span className="font-semibold">{field.label}</span>
                                    <input
                                        name={field.name}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        value={form[field.name]}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-(--main-dark) transition duration-300"
                                    />
                                </label>
                            ))}
                            <div className="flex items-center gap-4">
                                <button type="submit" className="w-fit px-8 py-3 bg-(--main-dark) text-white rounded-md hover:bg-(--hover-color) transition duration-300 cursor-pointer">Save changes</button>
                                {saved && <span className="text-green-600 font-semibold">Saved &#10003;</span>}
                            </div>
                        </form>
                    </div>

                    <div>
                        <p className="text-2xl font-bold mb-4">Order History</p>
                        <div className="border border-gray-200 rounded-md p-8 text-center text-(--fade-color)">
                            <p className="text-lg font-semibold">No orders yet</p>
                            <p className="mt-1">Your past orders will appear here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}