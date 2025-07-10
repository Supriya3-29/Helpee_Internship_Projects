import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Divider, Input, Select, Typography } from "antd";
import { useEffect, useState, useTransition } from "react";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const rightC = ["Add Event", "Add Note"];

const App = () => {
  const years = Array.from({ length: 100 }, (_, i) => 1980 + i);
  const today = new Date();
  const [transition, startTransition] = useTransition()
  // const [form, setForm]=useState({
  //   year: null,
  //   month: null,
  //   notes: null,
  //   event: null,
  //   date: null,
  //   time: null
  // })

  // const handleChange=(field: "year" | "month" | "notes" | "event" | "date" | "time") => (e)=>{
  //   const val=e.target.value;
  //   setForm({
  //     ...form,
  //     [field]: val
  //   })
  // }

  // onChange={handleChange("")}

  const [selectedYear, setSelectedYear] = useState<number>(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(today.getMonth());
  const [rightClick, setRightClick] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [eventInput, setEventInput] = useState("");
  const [noteInput, setNoteInput] = useState("");

  const [events, setEvents] = useState<{ [key: string]: { text: string, time: string }[] }>({});
  const [notes, setNotes] = useState<{ [key: string]: { text: string, time: string }[] }>({});

  const [, setClickPosition] = useState({ x: 0, y: 0 });

  // const [subEventDate, setSubEventDate] = useState("");
  // const [subNoteDate, setSubNoteDate] = useState("");
  const [subEventTime, setSubEventTime] = useState("");
  const [subNoteTime, setSubNoteTime] = useState("");


  const loadData = () => {
    const storedEvents = localStorage.getItem("events");
    const storedNotes = localStorage.getItem("notes");

    if (storedEvents) setEvents(JSON.parse(storedEvents));
    if (storedNotes) setNotes(JSON.parse(storedNotes));
  };

  useEffect(() => {
    loadData();
  }, []);

  const getDateKey = (day: number) => {
    return `${selectedYear}-${selectedMonth + 1}-${day}`;
  };


  const handleRightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, val: number) => {
    e.preventDefault();
    setClickPosition({ x: e.clientX, y: e.clientY });
    setRightClick(val);
    setSelectedOption(null);
    setEventInput("");
    setNoteInput("");

    localStorage.setItem("notes", JSON.stringify(notes));

    console.log("Right click detected!");
  }

  const handleAddEvent = (event: number, submissionTime: string) => {
    const dateKey = getDateKey(event);
    startTransition(() => {
      setEvents((prev) => {
        const updated = { ...prev, [dateKey]: [...(prev[dateKey] || []), { text: eventInput, time: submissionTime }] };
        localStorage.setItem("events", JSON.stringify(updated));
        return updated;
      });

      setRightClick(null);
      setSelectedOption(null);
      setEventInput("");
      // setSubEventDate("");
      // setSubNoteDate("");
      setSubEventTime("");
      setSubNoteTime("");    
    })
  };


  const handleAddNote = (note: number, submissionTime: string) => {
    const dateKey = getDateKey(note);

    setNotes((prev) => {
      const updated = { ...prev, [dateKey]: [...(prev[dateKey] || []), { text: noteInput, time: submissionTime }] };
      localStorage.setItem("notes", JSON.stringify(updated));
      return updated;
    });
    setRightClick(null);
    setSelectedOption(null);
    setNoteInput("");
    // setSubEventDate("");
    // setSubNoteDate("");
    setSubEventTime("");
    setSubNoteTime("");
  }

  const totalDays = new Date(selectedYear, selectedMonth + 1, 0).getDate();

  const firstWeekdayIndex = new Date(selectedYear, selectedMonth, 1).getDay();

  const currentDate = today.getDate();
  console.log(currentDate);

  const nextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear((prevYear) => prevYear + 1);
    } else {
      setSelectedMonth((prevMonth) => prevMonth + 1);
    }
  };

  const prevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear((prevYear) => prevYear - 1);
    } else {
      setSelectedMonth((prevMonth) => prevMonth - 1);
    }
  };

  // const formatDate = (dateString: string) => {
  //   if (!dateString) return "";
  //   const dateObj = new Date(dateString);
  //   const day = String(dateObj.getDate()).padStart(2, '0');
  //   const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  //   const year = dateObj.getFullYear();
  //   return `${day}-${month}-${year}`;
  // };

  if (transition) return "Loading..."
  return (
    <div
      style={{
        display: "Flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center",
        backgroundColor: "#EEEFE0"
      }}
    // onLoad={() => loadData()}
    >
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Typography.Title level={2}>Calender</Typography.Title>
        <Card
          title={`${months[selectedMonth]} ${selectedYear}`}
          style={{ marginTop: "3px", padding: "4px", minWidth: "700px", backgroundColor: '#D1D8BE' }}
        >
          <div>
            <Col
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                marginBottom: "15px"
              }}
            >
              <Button onClick={prevMonth} style={{ backgroundColor: "#A7C1A8" }}>
                <LeftOutlined />
              </Button>

              <Select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e)}
                options={months.map((month, index) => ({ value: index, label: month }))}
              />
              <Select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e)}
                options={years.map((year) => ({ value: Number(year), label: year }))}
              />
              
              <Button onClick={nextMonth} style={{ backgroundColor: "#A7C1A8" }}>
                <RightOutlined />
              </Button>
            </Col>

            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "88%",
                marginBottom: "15px"
              }}
            >
            </Col>

            {/* Weekday  */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "3px",
                marginBottom: "8px"
              }}
            >
              {weekdays.map((day) => (
                <div
                  key={day}
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    padding: "3px"
                  }}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "3px"
              }}
            >
              {Array.from({ length: firstWeekdayIndex }).map((_, idx) => (
                <div key={`empty-${idx}`} />
              ))}

              {/* Days */}
              {Array.from({ length: totalDays }, (_, i) => {
                const value = i + 1;

                const dateKey = getDateKey(value);
                const hasEvent = events[dateKey]?.length > 0;
                const hasNote = notes[dateKey]?.length > 0;

                return (
                  <div key={value} style={{ position: "relative" }}>
                    <Card
                      style={{
                        textAlign: "center",
                        minHeight: "80px",
                        maxHeight: "80px",
                        minWidth: "80px",
                        maxWidth: "80px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        borderRadius: "6px",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        backgroundColor:
                          selectedYear === today.getFullYear() &&
                            selectedMonth === today.getMonth() &&
                            i + 1 === today.getDate()
                            ? "#64E2B7"
                            : selectedDate === value
                              ? "#FFDD99"
                              : hasEvent
                                ? "#A4CCD9"
                                : hasNote
                                  ? "#C4E1E6"
                                  : "#EEEFE0",
                        overflow: "hidden",


                      }}
                      hoverable
                      onContextMenu={(e) => handleRightClick(e, value)}
                      onClick={() => setSelectedDate(value)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      <div style={{ fontSize: "14px", fontWeight: "bold" }}>{i + 1}</div>

                    </Card>


                    {/* Dropdown */}
                    {rightClick === value && !selectedOption && (
                      <div
                        style={{
                          position: "absolute",
                          top: 5,
                          left: 70,
                          backgroundColor: "#FFFFFF",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                          zIndex: 9999,
                          cursor: "pointer"
                        }}
                      >
                        {rightC.map((option) => (
                          <div
                            key={option}
                            onClick={() => setSelectedOption(option)}
                            style={{
                              padding: "8px 12px",
                              borderBottom: "1px solid #eee",
                              transition: "background-color 0.2s",
                              cursor: "pointer"
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}



                    {rightClick === value && selectedOption === "Add Event" && (
                      <div
                        style={{ position: "absolute", top: 45, left: 10, zIndex: 10 }}
                      >
                        <Input
                          placeholder="Enter Event"
                          value={eventInput}
                          onChange={(e) => setEventInput(e.target.value)}
                          style={{ width: '120px', marginBottom: '5px' }}
                        />
                        <Input
                          type="time"
                          value={subEventTime}
                          onChange={(e) => setSubEventTime(e.target.value)}
                        />
                        <Button size="small" onClick={() => handleAddEvent(value, subEventTime)} disabled={transition}>
                          {transition ? "Loading..." : "Add"}
                        </Button>
                      </div>
                    )}

                    {rightClick === value && selectedOption === "Add Note" && (
                      <div
                        style={{ position: "absolute", top: 45, left: 10, zIndex: 10 }}
                      >
                        <Input
                          placeholder="Enter Note"
                          value={noteInput}
                          onChange={(e) => setNoteInput(e.target.value)}
                          style={{ width: '120px', marginBottom: '5px' }}
                        />
                        <Input
                          type="time"
                          value={subNoteTime}
                          onChange={(e) => setSubNoteTime(e.target.value)}
                        />
                        <Button size="small" onClick={() => handleAddNote(value, subNoteTime)}>
                          Add
                        </Button>
                      </div>
                    )}
                  </div>

                )
              }
              )
              }
            </div>
          </div>
        </Card>
      </div>
      <div>
        {selectedDate && (
          <div style={{ marginTop: "10px", fontSize: "16px" }}>
            <strong>Selected Date: </strong> {`${selectedDate}-${selectedMonth + 1}-${selectedYear}`}
          </div>
        )}
        {/* Events and Notes: */}
        {Object.keys(events) && Object.keys(notes) &&
          <div style={{ marginTop: "20px", width: "80%", backgroundColor: "#f2f2f2", padding: "10px", borderRadius: "8px" }}>
            <Typography.Title level={3}>Events and Notes </Typography.Title>

            {Object.entries(events).map(([day, eventList]) => (
              <div key={`event-${day}`} style={{ marginBottom: "5px" }}>
                <strong>Date:</strong> {`${day} `} <br />
                <strong>Events:</strong>
                {eventList.map((event, idx) => (
                  <div key={idx}>
                    <span>- {event.text}</span><br />
                    {/* <span><strong>Submission Date : </strong>{formatDate(event.date)}</span><br /> */}
                    <span><strong>Submission Time : </strong>{event.time}</span>
                    <Divider />
                  </div>
                ))}
              </div>
            ))}

            {Object.entries(notes).map(([day, noteList]) => (
              <div key={`note-${day}`} style={{ marginBottom: "5px" }}>
                <strong>Date:</strong> {`${day}`} <br />
                <strong>Notes:</strong>
                {noteList.map((note, idx) => (
                  <div key={idx}>
                    <span>- {note.text}</span><br />
                    {/* <span><strong>Submission Date : </strong>{formatDate(note.date)}</span><br /> */}
                    <span><strong>Submission Time : </strong>{note.time}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default App;
