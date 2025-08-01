import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export function RegisterDialog({ onClose }: any) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOtp, setShowOtp] = useState(false); // 👈 New state
  const [otp, setOtp] = useState(""); // 👈 OTP input state

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/signup/", {
        name,
        email,
        password,
      });

      console.log("Registration successful:", response.data);
      alert("OTP has been sent to your email."); // Simulated behavior
      setShowOtp(true); // 👈 Show OTP input after successful register
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.get("http://localhost:8080/signup", {
        params: {
          email: email,
          otp: otp,
        },
      });

      if (response.data.success) {
        alert("OTP verified successfully!");
        if (typeof onClose === "function") onClose();
      } else {
        alert("Invalid OTP or expired.");
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
      alert("Failed to verify OTP. Please try again.");
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-700">
            Register
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <Label htmlFor="userName" className="text-gray-600">
              UserName
            </Label>
            <Input
              id="userName"
              type="text"
              placeholder="xyz_07"
              className="mt-1 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="reg-email" className="text-gray-600">
              Email
            </Label>
            <Input
              id="reg-email"
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="reg-password" className="text-gray-600">
              Password
            </Label>
            <Input
              id="reg-password"
              type="password"
              placeholder="********"
              className="mt-1 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="confirm-password" className="text-gray-600">
              Confirm Password
            </Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="********"
              className="mt-1 w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <DialogFooter className="flex justify-end pt-4">
            <Button
              type="submit"
              className="bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-md"
            >
              Register
            </Button>
          </DialogFooter>
        </form>

        {/* 👇 OTP Input Section (conditionally rendered) */}
        {showOtp && (
          <div className="mt-6 space-y-4">
            <div>
              <Label htmlFor="otp" className="text-gray-600">
                Enter OTP
              </Label>
              <Input
                id="otp"
                type="text"
                placeholder="6-digit code"
                className="mt-1 w-full"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                required
              />
            </div>
            <div className="flex justify-end">
              <Button
                onClick={handleVerifyOtp}
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-md"
              >
                Verify OTP
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
