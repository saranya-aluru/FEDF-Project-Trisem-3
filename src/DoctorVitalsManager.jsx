import React, {
  useState,
  useEffect,
} from "react";

function DoctorVitalsManager({
  patientId,
}) {
  const [vitals, setVitals] =
    useState([]);

  const [editing, setEditing] =
    useState(null);

  useEffect(() => {
    loadVitals();
  }, [patientId]);

  const loadVitals = () => {
    const allVitals =
      JSON.parse(
        localStorage.getItem(
          "patientVitals"
        )
      ) || [];

    const filtered =
      allVitals.filter(
        (v) =>
          v.patientId === patientId
      );

    setVitals(filtered);
  };

  const saveEdit = () => {
    let allVitals =
      JSON.parse(
        localStorage.getItem(
          "patientVitals"
        )
      ) || [];

    allVitals = allVitals.map((v) =>
      v.id === editing.id
        ? editing
        : v
    );

    localStorage.setItem(
      "patientVitals",
      JSON.stringify(allVitals)
    );

    setEditing(null);

    loadVitals();

    alert("Vitals Updated");
  };

  return (
    <div className="card">
      <h2>Patient Vitals</h2>

      {vitals.map((v) => (
        <div
          key={v.id}
          className="vital-card"
        >
          {editing?.id === v.id ? (
            <>
              <input
                value={editing.bp}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    bp: e.target.value,
                  })
                }
              />

              <input
                value={editing.sugar}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    sugar:
                      e.target.value,
                  })
                }
              />

              <input
                value={editing.pulse}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    pulse:
                      e.target.value,
                  })
                }
              />

              <button
                onClick={saveEdit}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <p>
                <strong>Date:</strong>{" "}
                {v.date}
              </p>

              <p>
                <strong>BP:</strong>{" "}
                {v.bp}
              </p>

              <p>
                <strong>Sugar:</strong>{" "}
                {v.sugar}
              </p>

              <p>
                <strong>Pulse:</strong>{" "}
                {v.pulse}
              </p>

              <button
                onClick={() =>
                  setEditing(v)
                }
              >
                Edit Vitals
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default DoctorVitalsManager;