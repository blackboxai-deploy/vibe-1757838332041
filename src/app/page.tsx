"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalRevenue: 85420,
    totalExpenses: 52300,
    netProfit: 33120,
    totalTransactions: 145,
    pendingInvoices: 12,
    totalCustomers: 28
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">🌍 Worldwide Accounting Pro</h1>
            <p className="text-xl text-gray-600 mt-2">Complete Accounting Software with Real-Time Calculations</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/transactions/add">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg">
                ➕ Add Transaction
              </Button>
            </Link>
            <Link href="/invoices/create">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg">
                📄 Create Invoice
              </Button>
            </Link>
          </div>
        </div>

        {/* Financial Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <Card className="bg-gradient-to-r from-green-400 to-green-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">💰 Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${stats.totalRevenue.toLocaleString()}</div>
              <p className="text-green-100 mt-1">+12.5% this month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-red-400 to-red-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">💸 Total Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${stats.totalExpenses.toLocaleString()}</div>
              <p className="text-red-100 mt-1">+3.2% this month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-400 to-blue-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">📊 Net Profit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${stats.netProfit.toLocaleString()}</div>
              <p className="text-blue-100 mt-1">+18.3% this month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-400 to-purple-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">📈 Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalTransactions}</div>
              <p className="text-purple-100 mt-1">+25 this week</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">📋 Pending Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.pendingInvoices}</div>
              <p className="text-yellow-100 mt-1">Need attention</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">👥 Total Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalCustomers}</div>
              <p className="text-indigo-100 mt-1">+4 this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Transactions */}
          <Card className="hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">💳 Transaction Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Complete transaction management with real-time calculations</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Sales, Purchase, Utility</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Rent, Salary, Dividend</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Multi-currency support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Real-time VAT calculation</li>
              </ul>
              <div className="flex space-x-2">
                <Link href="/transactions">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">View All</Button>
                </Link>
                <Link href="/transactions/add">
                  <Button variant="outline" className="flex-1">Add New</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Invoices */}
          <Card className="hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-2xl text-green-700">📄 Invoice Generator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Professional invoice generation with download capability</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Professional templates</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> PDF download</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Automatic VAT calculation</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Status tracking</li>
              </ul>
              <div className="flex space-x-2">
                <Link href="/invoices">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">View All</Button>
                </Link>
                <Link href="/invoices/create">
                  <Button variant="outline" className="flex-1">Create New</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Tax Management */}
          <Card className="hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="text-2xl text-red-700">🧾 Tax Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">VAT and Corporate Tax calculations worldwide</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> VAT calculations</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Corporate tax</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Multi-country support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Automatic compliance</li>
              </ul>
              <div className="flex space-x-2">
                <Link href="/taxes">
                  <Button className="flex-1 bg-red-600 hover:bg-red-700">View Taxes</Button>
                </Link>
                <Link href="/taxes/vat">
                  <Button variant="outline" className="flex-1">VAT Returns</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Folders */}
          <Card className="hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-700">🗂️ Folder Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Organize transactions by folders for better management</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Bank folder</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Expenses folder</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Suspense folder</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Automatic categorization</li>
              </ul>
              <div className="flex space-x-2">
                <Link href="/folders">
                  <Button className="flex-1 bg-purple-600 hover:bg-purple-700">View Folders</Button>
                </Link>
                <Link href="/folders/bank">
                  <Button variant="outline" className="flex-1">Bank</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Reports */}
          <Card className="hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-indigo-500">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-700">📊 Financial Reports</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Comprehensive financial reporting and analysis</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Balance Sheet</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Profit & Loss</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Cash flow analysis</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Export to PDF/Excel</li>
              </ul>
              <div className="flex space-x-2">
                <Link href="/reports">
                  <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">View Reports</Button>
                </Link>
                <Link href="/reports/balance-sheet">
                  <Button variant="outline" className="flex-1">Balance Sheet</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Settings */}
          <Card className="hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-gray-500">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-700">⚙️ Settings & Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Configure your accounting software for worldwide use</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Company settings</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Currency management</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Tax configurations</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> User preferences</li>
              </ul>
              <div className="flex space-x-2">
                <Link href="/settings">
                  <Button className="flex-1 bg-gray-600 hover:bg-gray-700">Open Settings</Button>
                </Link>
                <Button variant="outline" className="flex-1">Help</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
          <CardHeader>
            <CardTitle className="text-2xl text-center">🌍 Worldwide Accounting Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600">10+</div>
                <p className="text-gray-600 mt-2">Supported Currencies</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600">Real-Time</div>
                <p className="text-gray-600 mt-2">Calculations</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600">VAT + Corporate</div>
                <p className="text-gray-600 mt-2">Tax Management</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600">PDF</div>
                <p className="text-gray-600 mt-2">Invoice Download</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-2xl font-semibold text-gray-700">🚀 Complete Accounting Solution Ready!</p>
          <p className="text-gray-600 mt-2">Click on any feature above to start using the accounting software</p>
        </div>
      </div>
    </div>
  );
}