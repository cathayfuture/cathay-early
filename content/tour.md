--- 
layout: mini 
title: Book a Tour 
subtitle: Take a tour around our campus! It's free. 
---

<form>

    <div class="row">
        <div class="col">
            Your Name
            <input type="text" class="form-control" placeholder="Jane Doe">
        </div>
        <div class="col">
            Your Email
            <input type="email" class="form-control" placeholder="email@example.com">
        </div>
    </div>

    <div class="row">
        <div class="col">
            Your Address
            <input type="text" class="form-control" placeholder="1600 Pennsylvania Ave NW, Washington, DC 20500">
        </div>
    </div>


    <div class="row">
        <div class="col">
            Your Daytime Phone Number
            <input type="number" class="form-control" placeholder="3011234567">
        </div>
        <div class="col">
            Best time to contact you during the day
            <input type="text" class="form-control" placeholder="Morning">
        </div>
    </div>

    <div class="row">
            <div class="col">
                Your relationship to the child(ren)
                <input type="text" class="form-control" placeholder="Mother">
            </div>
            <div class="col">
                Please indicate with days work best for you to schedule a tour
                <select class="custom-select">
                        <option selected disabled></option>
                        <option value="Mon">Monday</option>
                        <option value="Tues">Tuesday</option>
                        <option value="Wed">Wednesday</option>
                        <option value="Thurs">Thursday</option>
                        <option value="Fri">Friday</option>
                </select>
        </div>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
</form>