"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Gesundheitsheld.in Account Deletion
            </h1>
            <p className="text-gray-600">
              Information about deleting your account and associated data
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                How to Request Account Deletion
              </h2>
              <p className="mt-2 text-gray-600">
                To request deletion of your Gesundheitsheld.in account and all
                associated data, please send an email with the subject line
                "Account Deletion Request" to the address below:
              </p>
              <div className="mt-3 flex items-center justify-center">
                <Mail className="h-5 w-5 text-gray-500 mr-2" />
                <a
                  href="mailto:support@gesundheitsheld.in"
                  className="text-blue-600 font-medium hover:underline"
                >
                  support@gesundheitsheld.in
                </a>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  Please include the following information in your email:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Your full name</li>
                  <li>Email address associated with your account</li>
                  <li>Brief reason for deletion (optional)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Data Deletion Policy
              </h2>
              <p className="mt-2 text-gray-600">
                Upon receiving your request, we will process the deletion of
                your account and all associated data. We do not retain any of
                your personal information after account deletion.
              </p>
              <p className="mt-2 text-gray-600">
                The deletion process will be completed within 30 days of
                receiving your request.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <Button
                className="w-full"
                onClick={() =>
                  (window.location.href =
                    "mailto:support@gesundheitsheld.in?subject=Account%20Deletion%20Request")
                }
              >
                Send Deletion Request Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
