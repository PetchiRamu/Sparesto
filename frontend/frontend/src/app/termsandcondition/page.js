'use client';
import React, { useState } from 'react';
import {
  Bell,
  Settings,
  User,
  Search,
  FileText,
  Tag,
  Lock,
  Database,
  Download,
  Printer,
  CheckSquare,
  Clock,
} from 'lucide-react';
import BuyerSidebar from '../components/buyersidebar';

// --- Mock Data (unchanged) ---
const documents = [
  {
    id: 1,
    title: "Master Service Agreement",
    status: "Active",
    dateLabel: "Expiry Date",
    dateValue: "Dec 31, 2025",
    content: {
      lastUpdated: "January 1, 2023",
      agreementTitle: "Master Service Agreement",
      sections: [
        { id: 1, title: "Introduction", text: "This Master Service Agreement (\"Agreement\") is entered into between B2B Platform (\"Company\") and the undersigned client (\"Client\"). This Agreement governs the provision of services by the Company to the Client. This document outlines the terms and conditions under which services will be provided, the responsibilities of each party, and the legal framework for the engagement." },
        { id: 2, title: "Services", text: "The Company agrees to provide the services as described in the Statement of Work (\"SOW\") which shall be attached hereto and incorporated herein by reference. The Company will perform the services with a standard of care, skill, and diligence consistent with industry practices. Any changes to the scope of services must be agreed upon in writing by both parties." },
        { id: 3, title: "Term and Termination", text: "This Agreement shall commence on the Effective Date and will continue until terminated by either party. Either party may terminate this Agreement with thirty (30) days written notice. The Company may terminate this Agreement immediately if the Client breaches any material term of this Agreement and fails to cure such breach within ten (10) days of receipt of written notice. Upon termination, the Client shall pay for all services rendered up to the date of termination. All provisions of this Agreement which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability." },
        { id: 4, title: "Fees and Payment", text: "Client agrees to pay the fees for the services as set forth in the applicable SOW. Invoices are due and payable within thirty (30) days of the invoice date. Late payments may be subject to interest at a rate of 1.5% per month or the highest rate permitted by law, whichever is lower." },
        { id: 5, title: "Confidentiality", text: "Each party (the “Receiving Party”) agrees to keep confidential all non-public information received from the other party (the “Disclosing Party”). The Receiving Party shall not use or disclose such confidential information except as necessary to perform its obligations under this Agreement. This obligation of confidentiality shall survive the termination of this Agreement." },
      ],
    },
  },
  { id: 2, title: "Sales Terms & Conditions", status: "Needs Review", dateLabel: "Effective Date", dateValue: "Jan 1, 2023", icon: Tag, content: { agreementTitle: "Sales Terms and Conditions", lastUpdated: "December 15, 2022", sections: [{ id: 1, title: "Overview", text: "Standard terms governing all purchases." }] } },
  { id: 3, title: "Non-Disclosure Agreement", status: "Active", dateLabel: "Expiry Date", dateValue: "Mar 15, 2024", icon: Lock, content: { agreementTitle: "Non-Disclosure Agreement (NDA)", lastUpdated: "March 15, 2023", sections: [{ id: 1, title: "Scope", text: "Defines confidential information exchanged between parties." }] } },
  { id: 4, title: "Data Processing Addendum", status: "Expired", dateLabel: "Expiry Date", dateValue: "Jun 01, 2022", icon: Database, content: { agreementTitle: "Data Processing Addendum (DPA)", lastUpdated: "May 1, 2021", sections: [{ id: 1, title: "Data Handling", text: "Governs processing of personal data." }] } },
];

// --- Status Badge ---
const StatusBadge = ({ status }) => {
  let colorClass = '';
  switch (status) {
    case 'Active': colorClass = 'bg-green-100 text-green-700'; break;
    case 'Needs Review': colorClass = 'bg-yellow-100 text-yellow-700'; break;
    case 'Expired': colorClass = 'bg-red-100 text-red-700'; break;
    default: colorClass = 'bg-gray-100 text-gray-700';
  }
  return <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${colorClass} whitespace-nowrap`}>{status}</span>;
};

// --- Document List (Top) ---
const DocumentList = ({ selectedDoc, setSelectedDoc }) => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocuments = documents.filter(doc => {
    const matchesFilter = filter === 'All' || doc.status.includes(filter);
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filterButtons = ['All', 'Active', 'Expired', 'Pending'];

  return (
    <div className="bg-white p-4 lg:p-6 rounded-xl shadow-lg border border-gray-200 mb-6">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search documents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>

      {/* Filters */}
      <div className="flex space-x-2 overflow-x-auto pb-2 mb-4 text-sm">
        {filterButtons.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-full font-medium transition duration-150 whitespace-nowrap ${
              filter === f ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Document Items */}
      <div className="grid md:grid-cols-2 gap-3">
        {filteredDocuments.map(doc => (
          <div
            key={doc.id}
            onClick={() => setSelectedDoc(doc)}
            className={`p-4 rounded-xl border transition duration-200 cursor-pointer ${
              selectedDoc.id === doc.id ? 'bg-blue-50 border-blue-400 ring-2 ring-blue-300 shadow-inner' : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm'
            }`}
          >
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <p className="font-semibold text-gray-800 text-sm leading-snug">{doc.title}</p>
              </div>
              <StatusBadge status={doc.status} />
            </div>
            <p className="text-xs text-gray-500 mt-1">{doc.dateLabel}: <span className="font-medium text-gray-600">{doc.dateValue}</span></p>
          </div>
        ))}
        {filteredDocuments.length === 0 && <p className="text-center text-gray-500 text-sm py-4">No documents found.</p>}
      </div>
    </div>
  );
};

// --- Document Viewer ---
const DocumentViewer = ({ document }) => {
  if (!document || !document.content) {
    return <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full flex items-center justify-center"><p className="text-gray-500 text-lg">Select a contract from above to view details.</p></div>;
  }

  const { lastUpdated, agreementTitle, sections } = document.content;

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{agreementTitle}</h2>
        <p className="text-sm text-gray-500 flex items-center mt-2 md:mt-0">
          <Clock className="w-4 h-4 mr-1" /> Last updated: {lastUpdated}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
        <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition shadow-sm"><Printer className="w-4 h-4" /><span>Print</span></button>
        <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition shadow-sm"><Download className="w-4 h-4" /><span>Download PDF</span></button>
        <button className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-md"><CheckSquare className="w-4 h-4" /><span>Accept & Sign</span></button>
      </div>

      {/* Scrollable Content */}
      <div className="prose max-w-none">
        {sections.map(section => (
          <div key={section.id} className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{section.id}. {section.title}</h3>
            <p className="text-gray-700 leading-relaxed text-base">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Page ---
const TermsAndConditionPage = () => {
  const [selectedDocument, setSelectedDocument] = useState(documents[0]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex">
       <div className="w-64">
        <BuyerSidebar />
      </div>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex flex-col gap-6">
        {/* Top Document List */}
        <DocumentList selectedDoc={selectedDocument} setSelectedDoc={setSelectedDocument} />
        
        {/* Document Viewer */}
        <DocumentViewer document={selectedDocument} />
      </main>

      <footer className="py-4 mt-6 border-t border-gray-200 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} B2B Platform. All rights reserved.
      </footer>
    </div>
  );
};

export default TermsAndConditionPage;




