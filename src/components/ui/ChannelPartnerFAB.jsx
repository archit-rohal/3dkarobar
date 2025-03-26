import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

export function ChannelPartnerFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    region: '',
    productInterest: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    toast.success('Thank you for your interest!', {
      description: 'We will get back to you shortly.',
    });
    setIsOpen(false);
    setFormData({
      name: '',
      address: '',
      email: '',
      region: '',
      productInterest: '',
      message: ''
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          className="fixed bottom-6 right-6 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in z-50 rounded-full"
          size="lg"
        >
          Become Our Sales Channel Partner
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">
            Partner with us to expand our sales reach!
          </SheetTitle>
        </SheetHeader>
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea 
              id="address" 
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="region">Region</Label>
            <Input 
              id="region" 
              value={formData.region}
              onChange={(e) => setFormData({...formData, region: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="productInterest">Product Interest</Label>
            <Select 
              value={formData.productInterest}
              onValueChange={(value) => setFormData({...formData, productInterest: value})}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select product category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3d-printer">3D Printer</SelectItem>
                <SelectItem value="materials">Materials</SelectItem>
                <SelectItem value="manufacturing">Manufacturing Services</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Message</Label>
            <Textarea 
              id="message" 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Tell us more about your interest..."
            />
          </div>

          <Button type="submit" className="w-full">Submit Application</Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}