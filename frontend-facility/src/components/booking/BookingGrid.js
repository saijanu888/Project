import React, { useEffect, useState } from "react";
import BookingService from "../../services/BookingService";

const BookingGrid = () => {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = () => {
        BookingService.fnGetAllBooking()
            .then(response => {
                const sortedBookings = response.data.sort((a, b) => b.id - a.id); // Sort by ID in descending order
                setBookings(sortedBookings);
                setError("");
            })
            .catch(error => {
                handleError(error);
            });
    };

    const handleApprove = (id) => {
        BookingService.fnApproveOrRejectBooking(id, true)
            .then(() => {
                fetchBookings();
            })
            .catch(error => {
                handleError(error);
            });
    };

    const handleReject = (id, facilityId) => {
        BookingService.fnApproveOrRejectBooking(id, false)
            .then(() => {
                updateFacilityStatus(facilityId, "Available");
                fetchBookings();
            })
            .catch(error => {
                handleError(error);
            });
    };

    const handleCancel = (id, facilityId) => {
        BookingService.fnCancelBooking(id)
            .then(() => {
                updateFacilityStatus(facilityId, "Available");
                fetchBookings();
            })
            .catch(error => {
                handleError(error);
            });
    };

    const updateFacilityStatus = (facilityId, status) => {
        BookingService.fnUpdateFacilityStatus(facilityId, status)
            .then(() => {
                console.log(`Facility ${facilityId} status updated to ${status}`);
            })
            .catch(error => {
                handleError(error);
            });
    };

    const handleError = (error) => {
        if (error.response) {
            setError(`Error: ${error.response.data}`);
        } else if (error.request) {
            setError("Request made but no response received.");
        } else {
            setError(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h1>All Bookings</h1>
            {error && (
                <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #dc3545', borderRadius: '4px', backgroundColor: '#f8d7da', color: '#721c24' }}>
                    <h2>Error</h2>
                    <pre>{error}</pre>
                </div>
            )}
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Booking Date</th>
                        <th>Facility Id</th>
                        <th>Resident Id</th>
                        <th>Event Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (
                        <tr key={booking.id}>
                            <td>{booking.id}</td>
                            <td>{new Date(booking.bookingDate).toLocaleString()}</td>
                            <td>{booking.facilityId}</td>
                            <td>{booking.residentId}</td>
                            <td>{new Date(booking.eventDate).toLocaleString()}</td>
                            <td>{booking.status}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => handleApprove(booking.id)}>Approve</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-secondary" onClick={() => handleReject(booking.id, booking.facilityId)}>Reject</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-danger" onClick={() => handleCancel(booking.id, booking.facilityId)}>Cancel</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingGrid;
