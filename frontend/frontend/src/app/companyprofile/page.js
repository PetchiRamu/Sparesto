"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Pencil,
  Trash2,
  Building2,
  MapPin,
  FileText,
  Settings,
  Save,
  Loader2 // Added for loading state
} from "lucide-react";
import Header from "../components/header";
import { fetchUserData } from "../apiservices/apiServices";



// /* ---------------- Sidebar Item ---------------- */
const SidebarItem = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 whitespace-nowrap md:w-full ${
      isActive
        ? "bg-[#1F7F7A] text-white font-semibold shadow-md"
        : "bg-[#AEEBE7] text-[#1E2A2A] hover:bg-[#155E5A] hover:text-white"
    }`}
  >
    <Icon className="w-5 h-5 flex-shrink-0" />
    <span className="text-sm">{label}</span>
    {isActive && <ChevronRight className="w-4 h-4 ml-auto hidden md:block" />}
  </button>
);

/* ---------------- Address Item ---------------- */
const AddressItem = ({
  id,
  title,
  address,
  isDefault,
  isEditing,
  tempAddress,
  onEdit,
  onChange,
  onSave,
  onDelete,
}) => (
  <div className="p-4 md:p-5 border border-[#D6ECEA] bg-white rounded-xl mb-4 flex flex-col sm:flex-row justify-between items-start gap-4">
    <div className="w-full">
      <div className="flex items-center space-x-2 mb-2">
        <h4 className="text-sm font-bold text-[#1E2A2A]">{title}</h4>
        {isDefault && (
          <span className="text-[10px] px-2 py-0.5 bg-[#4FB7B0] text-white rounded-full">
            Default
          </span>
        )}
      </div>

      {isEditing ? (
        <textarea
          value={tempAddress}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full border border-[#D6ECEA] rounded-lg p-3 focus:ring-2 focus:ring-[#1F7F7A] outline-none text-[#1E2A2A]"
        />
      ) : (
        <p className="text-sm text-[#5F6F73] whitespace-pre-line leading-relaxed">
          {address}
        </p>
      )}
    </div>

    <div className="flex sm:ml-4 space-x-2 self-end sm:self-start">
      {isEditing ? (
        <button
          onClick={() => onSave(id)}
          className="p-2 text-[#1F7F7A] hover:bg-[#D6ECEA] rounded-lg"
        >
          <Save className="w-5 h-5" />
        </button>
      ) : (
        <button
          onClick={() => onEdit(id, address)}
          className="p-2 text-[#5F6F73] hover:text-[#1F7F7A]"
        >
          <Pencil className="w-5 h-5" />
        </button>
      )}

      <button
        onClick={() => onDelete(id)}
        className="p-2 text-[#5F6F73] hover:text-[#D32F2F]"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default function CompanyProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    companyName: "",
    contactName: "",
    email: "",
    gst: "",
    phone: "",
    pan: "",
    businessType: "",
    paymentTerms: "",
  });

  const [addresses, setAddresses] = useState([]);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [tempAddress, setTempAddress] = useState("");

  // --- API Integration Start ---
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchUserData();
        
        // Assuming you want to display the first user from the array for the profile
        if (data && data.length > 0) {
          const user = data[0]; 
          
          setProfile({
            companyName: user.companyName || "",
            contactName: user.contactPerson || "",
            email: user.email || "",
            gst: user.GSTIN || "N/A",
            phone: user.phone || "",
            pan: user.PAN || "N/A",
            businessType: user.businessType || "",
            paymentTerms: user.preferredPaymentTerms || "N/A",
          });

          // Mapping API officeAddress to the addresses state
          setAddresses([
            { 
              id: user.id, 
              title: "Office Address", 
              address: user.officeAddress, 
              isDefault: true 
            }
          ]);
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
  // --- API Integration End ---

  const inputClass = `w-full border rounded-lg p-3 transition-all ${
    isEditing
      ? "border-[#D6ECEA] bg-white focus:ring-2 focus:ring-[#1F7F7A] outline-none text-[#1E2A2A]"
      : "bg-white/50 border-transparent cursor-not-allowed text-[#5F6F73]"
  }`;

  const renderContent = () => {
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-48 text-[#1F7F7A]">
                <Loader2 className="w-8 h-8 animate-spin mb-2" />
                <p>Loading profile details...</p>
            </div>
        );
    }

    switch (activeTab) {
      case "profile":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {[
              ["Company Name", "companyName"],
              ["Contact Name", "contactName"],
              ["Contact Email", "email"],
              ["GST Number", "gst"],
              ["Phone", "phone"],
              ["PAN Number", "pan"],
              ["Business Type", "businessType"],
              ["Payment Terms", "paymentTerms"],
            ].map(([label, key]) => (
              <div key={key}>
                <label className="text-[10px] font-bold uppercase text-[#5F6F73] mb-1.5 block">
                  {label}
                </label>
                <input
                  disabled={!isEditing}
                  value={profile[key]}
                  onChange={(e) => setProfile({ ...profile, [key]: e.target.value })}
                  className={inputClass}
                />
              </div>
            ))}
          </div>
        );
      case "addresses":
        return (
          <div>
            {addresses.length > 0 ? (
              addresses.map((addr) => (
                <AddressItem
                  key={addr.id}
                  {...addr}
                  isEditing={editingAddressId === addr.id}
                  tempAddress={tempAddress}
                  onEdit={(id, value) => { setEditingAddressId(id); setTempAddress(value); }}
                  onChange={setTempAddress}
                  onSave={(id) => {
                    setAddresses(prev => prev.map(a => a.id === id ? { ...a, address: tempAddress } : a));
                    setEditingAddressId(null);
                  }}
                  onDelete={(id) => setAddresses(prev => prev.filter(a => a.id !== id))}
                />
              ))
            ) : (
                <p className="text-[#5F6F73] italic">No addresses found.</p>
            )}
          </div>
        );
      default:
        return <p className="text-[#5F6F73] italic">Coming soon...</p>;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <aside className="w-full md:w-72 overflow-x-auto no-scrollbar">
            <div className="flex md:flex-col gap-3 pb-2 md:pb-0">
              <SidebarItem icon={Building2} label="Company Info" isActive={activeTab === "profile"} onClick={() => setActiveTab("profile")} />
              <SidebarItem icon={MapPin} label="Addresses" isActive={activeTab === "addresses"} onClick={() => setActiveTab("addresses")} />
            </div>
          </aside>

          <div className="flex-1 bg-[#AEEBE7] rounded-2xl border border-[#D6ECEA] shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-8 border-b border-[#1F7F7A]/20 pb-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#1E2A2A] capitalize">
                  {activeTab === "profile" ? "Company Information" : activeTab}
                </h2>

                {activeTab === "profile" && !loading && (
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="font-semibold text-[#1F7F7A] hover:text-[#155E5A]"
                  >
                    {isEditing ? "Cancel" : "Edit"}
                  </button>
                )}
              </div>

              <div className="min-h-[300px]">
                {renderContent()}
              </div>

              {isEditing && activeTab === "profile" && (
                <div className="mt-8 pt-6 border-t border-[#1F7F7A]/20 flex justify-end">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-3 bg-[#1F7F7A] hover:bg-[#155E5A] text-white rounded-lg shadow-md transition-all active:scale-95"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}