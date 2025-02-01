"use server";

export const Action___GET__VerifyPayment = async (sessionId: string) => {
    try {
        const response = await fetch(
            `/api/stripe/verify?session_id=${sessionId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const data = await response.json();
        return data
    } catch (error) {
        return {
            success: false,
            message: "Failed to verify payment"
        }
    }
}

export const Action___GET__AllGigs = async () => {
    try {
        const url = `${process.env.BASEURL}/gigs`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            next: {
                revalidate: 60 * 60 * 24 * 2,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return {
            success: false,
            message: "Failed to fetch gigs"
        }
    }
}
