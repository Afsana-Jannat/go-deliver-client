import React from 'react';

const QuestionArea = () => {
    return (
        <div className="w-full flex flex-col items-center my-10">
            {/* FAQ Header */}
            <div className="text-center max-w-2xl">
                <img
                    className="mx-auto w-[100px] h-[100px] object-contain"
                    src="https://static.vecteezy.com/system/resources/thumbnails/019/029/289/small/blue-question-mark-icon-sign-or-ask-faq-answer-symbol-isolated-3d-illustration-png.png"
                    alt="FAQ Icon"
                />
                <h2 className="text-3xl font-bold my-4 text-[#103963]">
                    Frequently Asked Question (FAQ)
                </h2>
                <p className="text-sm text-gray-500">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                    Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>

            {/* FAQ Items */}
            <div className="my-8 w-full max-w-3xl">
                <div className="collapse collapse-arrow bg-gray-50 border border-base-300">
                    <input type="radio" name="faq-accordion" defaultChecked />
                    <div className="collapse-title font-semibold">
                        How does this posture corrector work?
                    </div>
                    <div className="collapse-content text-sm">
                        Click the "Sign Up" button in the top right corner and follow the registration process.
                    </div>
                </div>

                <div className="collapse my-4 collapse-arrow bg-gray-50 border border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                        I forgot my password. What should I do?
                    </div>
                    <div className="collapse-content text-sm">
                        Click on "Forgot Password" on the login page and follow the instructions sent to your email.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-gray-50 border border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                        How do I update my profile information?
                    </div>
                    <div className="collapse-content text-sm">
                        Go to "My Account" settings and select "Edit Profile" to make changes.
                    </div>
                </div>

                <div className="collapse my-4 collapse-arrow bg-gray-50 border border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                        How can I track my order?
                    </div>
                    <div className="collapse-content text-sm">
                        Use your tracking ID in the “Track Parcel” section to get real-time updates on delivery.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionArea;
