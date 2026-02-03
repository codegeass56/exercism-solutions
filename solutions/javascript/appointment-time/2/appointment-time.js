// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  const appointment = new Date(now ?? Date.now());
  appointment.setDate(appointment.getDate() + days);
  return appointment;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return new Date(appointmentDate).toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const date = new Date(timestamp);
  return {
    year: date.getFullYear(), 
    month: date.getMonth(), 
    date: date.getDate(), 
    hour: date.getHours(), 
    minute: date.getMinutes()
  };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const prevAppointment = new Date(timestamp);
  if(options.year !== undefined) prevAppointment.setFullYear(options.year);
  if(options.month !== undefined) prevAppointment.setMonth(options.month);
  if(options.date !== undefined) prevAppointment.setDate(options.date);
  if(options.hour !== undefined) prevAppointment.setHours(options.hour);
  if(options.minute !== undefined) prevAppointment.setMinutes(options.minute);
  return getAppointmentDetails(prevAppointment.toISOString());
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  return Math.round(Math.abs(new Date(timestampA) / 1000 - new Date(timestampB) / 1000));
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return new Date(currentTimestamp) < new Date(appointmentTimestamp);
}
