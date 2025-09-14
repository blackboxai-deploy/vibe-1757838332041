"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

export default function WorkingDemo() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      description: 'Website Development Revenue',
      amount: 5000,
      currency: 'USD',
      category: 'sales',
      folder: 'bank',
      date: '2024-01-15',
      vatRate: 20,
      status: 'approved'
    },
    {
      id: 2,
      description: 'Office Rent Payment',
      amount: 2500,
      currency: 'USD',
      category: 'rent',
      folder: 'expenses',
      date: '2024-01-01',
      vatRate: 0,
      status: 'approved'
    },
    {
      id: 3,
      description: 'Software Purchase',
      amount: 1200,
      currency: 'USD',
      category: 'purchase',
      folder: 'expenses',
      date: '2024-01-10',
      vatRate: 20,
      status: 'pending'
    }
  ]);

  const [invoices] = useState([
    {
      id: 1,
      number: 'INV-2024-001',
      customer: 'Tech Solutions Inc.',
      amount: 5000,
      currency: 'USD',
      status: 'sent',
      date: '2024-01-15',
      dueDate: '2024-02-15'
    },
    {
      id: 2,
      number: 'INV-2024-002',
      customer: 'Global Corp Ltd.',
      amount: 3500,
      currency: 'EUR',
      status: 'paid',
      date: '2024-01-20',
      dueDate: '2024-02-20'
    }
  ]);

  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    currency: 'USD',
    category: 'sales',
    folder: 'bank',
    date: new Date().toISOString().split('T')[0],
    vatRate: '20',
  });

  const [showForm, setShowForm] = useState(false);
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.description || !formData.amount) {
      alert('Please fill in required fields');
      return;
    }

    const newTransaction = {
      id: transactions.length + 1,
      description: formData.description,
      amount: parseFloat(formData.amount),
      currency: formData.currency,
      category: formData.category,
      folder: formData.folder,
      date: formData.date,
      vatRate: parseFloat(formData.vatRate),
      status: 'pending'
    };

    setTransactions([newTransaction, ...transactions]);
    setFormData({
      description: '',
      amount: '',
      currency: 'USD',
      category: 'sales',
      folder: 'bank',
      date: new Date().toISOString().split('T')[0],
      vatRate: '20',
    });
    setShowForm(false);
    alert('✅ Transaction added successfully!');
  };

  const calculateTotals = () => {
    const totalRevenue = transactions.filter(t => t.category === 'sales').reduce((sum, t) => sum + t.amount, 0);
    const totalExpenses = transactions.filter(t => ['purchase', 'rent', 'utility', 'salary'].includes(t.category)).reduce((sum, t) => sum + t.amount, 0);
    const netProfit = totalRevenue - totalExpenses;
    const totalVAT = transactions.reduce((sum, t) => sum + (t.amount * t.vatRate / 100), 0);
    
    return { totalRevenue, totalExpenses, netProfit, totalVAT };
  };

  const { totalRevenue, totalExpenses, netProfit, totalVAT } = calculateTotals();

  const formatCurrency = (amount: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'paid': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🌍 WORLDWIDE ACCOUNTING SOFTWARE
          </h1>
          <p className="text-2xl text-gray-600">
            Real-Time Calculations • Multi-Currency • VAT & Tax Management
          </p>
        </div>

        {/* KPI Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-r from-green-400 to-green-600 text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">💰 Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{formatCurrency(totalRevenue)}</div>
              <p className="text-green-100 mt-2">+12.5% this month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-red-400 to-red-600 text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">💸 Total Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{formatCurrency(totalExpenses)}</div>
              <p className="text-red-100 mt-2">Business costs</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">📊 Net Profit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{formatCurrency(netProfit)}</div>
              <p className={`mt-2 ${netProfit >= 0 ? 'text-blue-100' : 'text-blue-200'}`}>
                {netProfit >= 0 ? 'Profitable' : 'Loss'}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">🧾 Total VAT</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{formatCurrency(totalVAT)}</div>
              <p className="text-purple-100 mt-2">Tax liability</p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-6">
          <Button 
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-xl shadow-lg"
          >
            ➕ Add Transaction
          </Button>
          <Button 
            onClick={() => setShowInvoiceForm(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-xl shadow-lg"
          >
            📄 Create Invoice
          </Button>
        </div>

        {/* Add Transaction Form */}
        {showForm && (
          <Card className="shadow-2xl border-2 border-blue-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <CardTitle className="text-2xl">➕ Add New Transaction</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleAddTransaction} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-lg font-semibold">Description *</Label>
                    <Input
                      placeholder="Enter transaction description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      className="text-lg p-4 mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-lg font-semibold">Amount *</Label>
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={formData.amount}
                      onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                      className="text-lg p-4 mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-lg font-semibold">Currency</Label>
                    <Select value={formData.currency} onValueChange={(value) => 
                      setFormData(prev => ({ ...prev, currency: value }))
                    }>
                      <SelectTrigger className="text-lg p-4 mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">💵 USD</SelectItem>
                        <SelectItem value="EUR">💶 EUR</SelectItem>
                        <SelectItem value="GBP">💷 GBP</SelectItem>
                        <SelectItem value="INR">🇮🇳 INR</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => 
                      setFormData(prev => ({ ...prev, category: value }))
                    }>
                      <SelectTrigger className="text-lg p-4 mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">🛒 SALES</SelectItem>
                        <SelectItem value="purchase">🔧 PURCHASE</SelectItem>
                        <SelectItem value="utility">⚡ UTILITY</SelectItem>
                        <SelectItem value="rent">🏠 RENT</SelectItem>
                        <SelectItem value="salary">👥 SALARY</SelectItem>
                        <SelectItem value="dividend">💰 DIVIDEND</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold">Folder</Label>
                    <Select value={formData.folder} onValueChange={(value) => 
                      setFormData(prev => ({ ...prev, folder: value }))
                    }>
                      <SelectTrigger className="text-lg p-4 mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bank">🏦 BANK</SelectItem>
                        <SelectItem value="expenses">💳 EXPENSES</SelectItem>
                        <SelectItem value="suspense">⏳ SUSPENSE</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold">VAT Rate</Label>
                    <Select value={formData.vatRate} onValueChange={(value) => 
                      setFormData(prev => ({ ...prev, vatRate: value }))
                    }>
                      <SelectTrigger className="text-lg p-4 mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0% VAT</SelectItem>
                        <SelectItem value="10">10% VAT</SelectItem>
                        <SelectItem value="18">18% GST</SelectItem>
                        <SelectItem value="20">20% VAT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Calculation Preview */}
                {formData.amount && (
                  <Card className="bg-green-50 border-green-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">💰 CALCULATION PREVIEW</h3>
                      <div className="text-lg space-y-2">
                        <div className="flex justify-between">
                          <span>Base Amount:</span>
                          <span className="font-bold">{formData.currency} {parseFloat(formData.amount).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-blue-600">
                          <span>VAT ({formData.vatRate}%):</span>
                          <span className="font-bold">{formData.currency} {(parseFloat(formData.amount) * parseFloat(formData.vatRate) / 100).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-2xl font-bold border-t pt-2">
                          <span>TOTAL:</span>
                          <span className="text-green-600">{formData.currency} {(parseFloat(formData.amount) * (1 + parseFloat(formData.vatRate) / 100)).toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="flex justify-center space-x-6">
                  <Button 
                    type="button"
                    variant="outline" 
                    onClick={() => setShowForm(false)}
                    className="px-8 py-4 text-lg"
                  >
                    ❌ Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="px-8 py-4 text-lg bg-green-600 hover:bg-green-700"
                  >
                    ✅ Add Transaction
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Transactions List */}
        <Card className="shadow-xl">
          <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
            <CardTitle className="text-2xl">📋 All Transactions ({transactions.length})</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <Card key={transaction.id} className="border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold">{transaction.description}</h3>
                        <div className="flex space-x-4 text-sm text-gray-600 mt-2">
                          <span>📅 {transaction.date}</span>
                          <span>📁 {transaction.category.toUpperCase()}</span>
                          <span>🗂️ {transaction.folder.toUpperCase()}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">
                          {formatCurrency(transaction.amount, transaction.currency)}
                        </div>
                        {transaction.vatRate > 0 && (
                          <div className="text-sm text-gray-600">
                            VAT: {formatCurrency(transaction.amount * transaction.vatRate / 100, transaction.currency)}
                          </div>
                        )}
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${getStatusColor(transaction.status)}`}>
                          {transaction.status.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Invoices List */}
        <Card className="shadow-xl">
          <CardHeader className="bg-gradient-to-r from-green-100 to-green-200">
            <CardTitle className="text-2xl">📄 Recent Invoices ({invoices.length})</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {invoices.map((invoice) => (
                <Card key={invoice.id} className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold">{invoice.number}</h3>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(invoice.status)}`}>
                          {invoice.status.toUpperCase()}
                        </div>
                      </div>
                      <p className="text-gray-600">👤 {invoice.customer}</p>
                      <div className="flex justify-between">
                        <span>📅 {invoice.date}</span>
                        <span className="text-xl font-bold text-green-600">
                          {formatCurrency(invoice.amount, invoice.currency)}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">📥 Download PDF</Button>
                        <Button size="sm" variant="outline" className="flex-1">📧 Send Email</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features Overview */}
        <Card className="shadow-xl bg-gradient-to-r from-gray-50 to-gray-100">
          <CardHeader>
            <CardTitle className="text-3xl text-center">🎯 Complete Accounting Features</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold">BANK FOLDER</h3>
                <p className="text-gray-600 mt-2">Banking transactions and reconciliation</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-bold">EXPENSES FOLDER</h3>
                <p className="text-gray-600 mt-2">Expense categorization and management</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⏳</div>
                <h3 className="text-xl font-bold">SUSPENSE FOLDER</h3>
                <p className="text-gray-600 mt-2">Unreconciled and temporary entries</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🧾</div>
                <h3 className="text-xl font-bold">VAT TAX</h3>
                <p className="text-gray-600 mt-2">Automatic VAT calculations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold">CORPORATE TAX</h3>
                <p className="text-gray-600 mt-2">Corporate tax management</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold">BALANCE SHEET</h3>
                <p className="text-gray-600 mt-2">Real-time balance sheet</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}