---
layout: mini 
title: Book a Tour 
subtitle: Take a tour around our campus! It's free. 
isForm: true
--- 

The information below will be
processed by our Preschool Director, and we will use your contact information to better customize your tour.

<span style="font-size: 1rem" id="form-status"><i class="fas fa-save"></i>&ensp;Your information will be saved to your browser before your submit</span>

<form id="tour-form" style="font-size: 16px" accept-charset="UTF-8" action="https://usebasin.com/f/884f5d0234a2" method="POST">
    <div class="row">
        <div class="col">
            Your Name
            <input type="text" class="form-control" name="name" placeholder="Jane Doe" required>
        </div>
        <div class="col">
            Your Email
            <input type="email" class="form-control" name="email" placeholder="email@example.com" required>
        </div>
    </div>

    <div class="row">
        <div class="col">
            Your Address
            <input type="text" class="form-control" name="address-l1" placeholder="Address Line 1" required>
            <br />
            <input type="text" class="form-control" name="address-l2" placeholder="Address Line 2">
        </div>
    </div>

    <div class="row">
        <div class="col">
            <input type="text" class="form-control" name="city" placeholder="City" required>
        </div>
        <div class="col">
            <input type="text" class="form-control" name="state" placeholder="State" required>
        </div>
    </div>

    <div class="row">
        <div class="col">
            Your Daytime Phone Number
            <input type="number" class="form-control" name="day-phone" placeholder="3011234567" required>
        </div>
        <div class="col">
            Best time to contact you during the day
            <input type="text" class="form-control" name="best-time-of-contact" placeholder="Morning" required>
        </div>
    </div>

    <div class="row">
        <div class="col">
            Your relationship to the child(ren)
            <input type="text" class="form-control" name="relationship" placeholder="Mother" required>
        </div>
        <div class="col">
            Please indicate which day works best for you to schedule a tour
            <br />
            <select name="day-of-choice" class="form-control">
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
            </select>
        </div>
    </div>

    <div class="row">
        <div class="col">
            Please indicate which time of the day works best for you to come visit us
            <br />
            <select name="time-of-choice" class="form-control">
                <option value="9:00–9:45 am">9:00 – 9:45 am</option>
                <option value="9:45–10:30 am">9:45 – 10:30 am</option>
                <option value="10:30–11:15 am">10:30 – 11:15 am</option>
                <option value="3:00–3:45 pm">3:00 – 3:45 pm</option>
                <option value="3:45–4:30 pm">3:45 – 4:30 pm</option>
                <option value="4:30–5:15 pm">4:30 – 5:15 pm</option>
            </select>
        </div>

        <div class="col">
            Please verify that you are not a robot
            <div class="g-recaptcha" data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"></div>
        </div>
    </div>

    <div class="text-center">
        <button type="submit" class="btn btn-light btn-lg">Submit</button>
        <p class="hint" style="font-size: .8rem; margin-top: .7rem"><i class="fas fa-lock" style="font-size: .8rem; vertical-align: center;"></i> We use industry-standard encryption to secure your information.</p>
    </div>
</form>