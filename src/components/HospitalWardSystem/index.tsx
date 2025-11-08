import { useState } from 'react';
import { User, AlertTriangle, Droplet } from 'lucide-react';
import { AppState } from '../../App';

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  ward: string;
  status: string;
  room: string;
  bedStatus: number[];
  alerts?: string[];
  statusColor?: string;
  iconType?: 'droplet' | 'warning' | 'none';
  buttonNumber?: number;
}

interface HospitalWardSystemProps {
  appState?: AppState;
  updateAppState: (updates: Partial<AppState>) => void;
}

const HospitalWardSystem = ({ updateAppState }: HospitalWardSystemProps) => {
  const [activeTab, setActiveTab] = useState('Warteliste');

  const leftPatients: Patient[] = [
    {
      id: '1',
      name: 'Riemer, Herbert (90)',
      age: 90,
      gender: 'male',
      ward: 'UCH BWAA',
      status: 'Pt Unfähicher Hof',
      room: 'S4-324',
      bedStatus: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      alerts: ['24.10 Birsontal'],
      iconType: 'none',
      buttonNumber: 0
    },
    {
      id: '2',
      name: 'Stotz, Friedhelm (61)',
      age: 61,
      gender: 'male',
      ward: 'ORT EXT BWAA',
      status: '',
      room: 'S4-324',
      bedStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      iconType: 'droplet',
      buttonNumber: 0
    },
    {
      id: '3',
      name: 'Ulrich, Rita (70)',
      age: 70,
      gender: 'female',
      ward: 'ACH BWAA',
      status: '',
      room: 'S4-325',
      bedStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      iconType: 'droplet',
      buttonNumber: 0
    },
    {
      id: '4',
      name: 'Hornbacher, Gaina (68)',
      age: 68,
      gender: 'female',
      ward: '',
      status: '',
      room: 'S4-325',
      bedStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      iconType: 'none',
      buttonNumber: 0
    }
  ];

  const rightPatients: Patient[] = [
    {
      id: '5',
      name: 'Waschinger, Renate (70)',
      age: 70,
      gender: 'female',
      ward: 'ACH BWAA',
      status: '',
      room: 'S4-328',
      bedStatus: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      iconType: 'none',
      buttonNumber: 3
    },
    {
      id: '6',
      name: 'Hazin, Hariama (53)',
      age: 53,
      gender: 'female',
      ward: 'ACH BWAA',
      status: '',
      room: 'S4-329',
      bedStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      iconType: 'warning',
      buttonNumber: 3
    },
    {
      id: '7',
      name: 'Schröder, Kerstin (44)',
      age: 44,
      gender: 'female',
      ward: 'CH KRAFT BWAA',
      status: '',
      room: 'S4-330',
      bedStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      iconType: 'droplet',
      buttonNumber: 4
    },
    {
      id: '8',
      name: 'Marx, Hermine (87)',
      age: 87,
      gender: 'female',
      ward: 'UCH BWAA',
      status: 'Pt Vielsquelle // Patentenverfügung, Sehn ut Bezollmächtigte',
      room: 'S4-331',
      bedStatus: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      statusColor: 'text-red-600',
      iconType: 'warning',
      buttonNumber: 2
    },
    {
      id: '9',
      name: 'Weber, Petra (70)',
      age: 70,
      gender: 'female',
      ward: 'ACH BWAA',
      status: '',
      room: 'S4-331',
      bedStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      iconType: 'none',
      buttonNumber: 2
    },
    {
      id: '10',
      name: 'Kümmel, Jürgen (64)',
      age: 64,
      gender: 'male',
      ward: '',
      status: '29.10. Heilerscheinik // immm Staheo von sich',
      room: 'S4-332',
      bedStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      statusColor: 'text-red-600',
      iconType: 'none',
      buttonNumber: 0
    }
  ];

  const bottomPatients = [
    { name: 'Harpe, Dirk', gender: 'male', status: 'akt', condition: 'vorst.', label: 'Pat.', info: 'stat. gepl. ab 20.10.2025' },
    { name: 'OPUS_1_1 BULA', gender: 'male', status: 'gepl', condition: '(stat)', label: 'Pat.', info: 'gepl. ab: 29.09.2025 17:51' }
  ];

  const BedStatus = ({ status }: { status: number[] }) => (
    <div className="flex gap-px">
      {status.map((s, i) => (
        <div
          key={i}
          className={`w-3 h-2.5 border border-gray-500 ${
            s === 1 ? 'bg-blue-500' : s === 2 ? 'bg-red-500' : 'bg-white'
          }`}
        />
      ))}
    </div>
  );

  const PatientCard = ({ patient }: { patient: Patient; isLeft?: boolean }) => (
    <div 
      className="flex items-start gap-2 border-b border-gray-300 py-2 px-2 hover:bg-gray-50 cursor-pointer"
      onClick={() => {
        // Extract just the name without age for the selected patient
        const nameWithoutAge = patient.name.split(' (')[0];
        updateAppState({
          selectedPatient: {
            id: patient.id,
            name: nameWithoutAge
          },
          sidebarSection2Visible: true
        })
      }}
    >
      <User className={`w-4 h-4 mt-0.5 flex-shrink-0 ${patient.gender === 'male' ? 'text-blue-600' : 'text-pink-600'}`} />
      <div className="flex-1 min-w-0">
        {patient.status && patient.statusColor && (
          <div className={`text-xs ${patient.statusColor} mb-0.5 bg-red-50 px-1 py-0.5`}>
            {patient.status}
          </div>
        )}
        {patient.status && !patient.statusColor && patient.alerts && (
          <div className="text-xs text-red-600 mb-0.5">
            {patient.status}
          </div>
        )}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium">{patient.name}</div>
            <div className="text-xs text-gray-700">{patient.ward}</div>
            {patient.alerts && patient.alerts.length > 0 && (
              <div className="text-xs text-red-600">{patient.alerts[0]}</div>
            )}
            <div className="mt-1">
              <BedStatus status={patient.bedStatus} />
            </div>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {patient.iconType === 'droplet' && (
              <Droplet className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
            )}
            {patient.iconType === 'warning' && (
              <AlertTriangle className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
            )}
            {patient.iconType === 'none' && patient.buttonNumber === 2 && (
              <div className="w-3.5 h-3.5 bg-red-500"></div>
            )}
            <span className="text-xs text-gray-600 whitespace-nowrap">A2/S2</span>
            <div className="flex gap-0.5">
              <button className="w-4 h-4 border border-gray-500 bg-white text-xs flex items-center justify-center text-red-600 font-semibold">
                {(patient.buttonNumber ?? 0) > 0 ? patient.buttonNumber : ''}
              </button>
              <button className="w-4 h-4 border border-gray-500 bg-white"></button>
              <button className="w-4 h-4 border border-gray-500 bg-white"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col text-xs font-sans overflow-hidden">
      {/* Top Menu Bar - Dark blue/purple header */}
      <div className="bg-indigo-800 px-3 py-1.5 flex items-center gap-4 text-white border-b border-gray-500">
        <div className="font-semibold cursor-pointer hover:text-gray-200">Stationsansicht</div>
        <div className="cursor-pointer hover:text-gray-200">Behandlerfilter Station</div>
        <div className="cursor-pointer hover:text-gray-200">Behandlerfilter Krankenhaus</div>
        <div className="cursor-pointer hover:text-gray-200">Zugewiesene Räume</div>
        <div className="ml-auto">
          <button className="px-2 py-1 bg-indigo-700 hover:bg-indigo-600 border border-indigo-600 rounded text-xs">
            Behandler zuweisen
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col border-r-2 border-gray-500">
          {/* Lounge - Takes approximately 40% of left section */}
          <div className="h-[40%] border-b-2 border-gray-500 bg-white">
            <div className="p-2 h-full flex flex-col">
              <div className="font-semibold text-sm mb-2">LOUNGE S4</div>
              <div className="flex-1 bg-yellow-50 border border-gray-400"></div>
            </div>
          </div>

          {/* Patient Cards Section - Takes approximately 60% of left section */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* S4-324 Room - Green Background */}
            <div className="bg-green-100 border-b border-gray-400">
              <div className="flex">
                <div className="w-20 font-semibold text-sm p-2 flex-shrink-0">S4-324-2</div>
                <div className="flex-1 border-l border-gray-300">
                  {leftPatients.slice(0, 2).map((patient) => (
                    <PatientCard key={patient.id} patient={patient} isLeft={true} />
                  ))}
                </div>
              </div>
            </div>

            {/* S4-325 Room - Green Background */}
            <div className="bg-green-100 border-b border-gray-400 flex-1 overflow-auto">
              <div className="flex h-full">
                <div className="w-20 font-semibold text-sm p-2 flex-shrink-0">S4-325-2</div>
                <div className="flex-1 border-l border-gray-300">
                  {leftPatients.slice(2, 4).map((patient) => (
                    <PatientCard key={patient.id} patient={patient} isLeft={true} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex flex-col overflow-hidden">
          {/* Patient Rooms */}
          <div className="flex-1 flex flex-col">
            {/* S4-328 */}
            <div className="border-b border-gray-400 bg-white" style={{ height: '16.66%' }}>
              <div className="flex h-full">
                <div className="w-20 font-semibold text-sm p-2 flex-shrink-0">S4-328-2</div>
                <div className="flex-1 border-l border-gray-300 overflow-auto">
                  <div className="text-xs text-red-600 bg-red-50 px-2 py-0.5">
                    Gesperrt wg. infektiösem Nachbarbett
                  </div>
                  <PatientCard patient={rightPatients[0]} isLeft={false} />
                </div>
              </div>
            </div>

            {/* S4-329 */}
            <div className="border-b border-gray-400 bg-white" style={{ height: '16.66%' }}>
              <div className="flex h-full">
                <div className="w-20 font-semibold text-sm p-2 flex-shrink-0">S4-329-2</div>
                <div className="flex-1 border-l border-gray-300 overflow-auto">
                  <PatientCard patient={rightPatients[1]} isLeft={false} />
                </div>
              </div>
            </div>

            {/* S4-330 */}
            <div className="border-b border-gray-400 bg-white" style={{ height: '16.66%' }}>
              <div className="flex h-full">
                <div className="w-20 font-semibold text-sm p-2 flex-shrink-0">S4-330-2</div>
                <div className="flex-1 border-l border-gray-300 overflow-auto">
                  <PatientCard patient={rightPatients[2]} isLeft={false} />
                </div>
              </div>
            </div>

            {/* S4-331 */}
            <div className="border-b border-gray-400 bg-white" style={{ height: '16.66%' }}>
              <div className="flex h-full">
                <div className="w-20 font-semibold text-sm p-2 flex-shrink-0">S4-331-2</div>
                <div className="flex-1 border-l border-gray-300 overflow-auto">
                  {rightPatients.slice(3, 5).map((patient) => (
                    <PatientCard key={patient.id} patient={patient} isLeft={false} />
                  ))}
                </div>
              </div>
            </div>

            {/* S4-332 */}
            <div className="border-b border-gray-400 bg-white" style={{ height: '16.66%' }}>
              <div className="flex h-full">
                <div className="w-20 font-semibold text-sm p-2 flex-shrink-0">S4-332-2</div>
                <div className="flex-1 border-l border-gray-300 overflow-auto">
                  <div className="text-xs text-red-600 bg-red-50 px-2 py-0.5">
                    29.10. Heilerscheinik // immm Staheo von sich
                  </div>
                  <PatientCard patient={rightPatients[5]} isLeft={false} />
                </div>
              </div>
            </div>

            {/* Empty space for remaining rooms */}
            <div className="flex-1 bg-white"></div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Detailinformationen */}
      <div className="border-t-2 border-gray-500 bg-white flex flex-col" style={{ height: '35%' }}>
        {/* Section Header */}
        <div className="bg-gray-200 px-3 py-1 text-xs font-semibold border-b border-gray-400">
          Detailinformationen
        </div>

        {/* Tabs */}
        <div className="flex gap-4 px-3 py-1.5 bg-green-50 border-b border-gray-400">
          <button 
            className={`text-xs ${activeTab === 'Warteliste' ? 'text-blue-600 underline font-semibold' : 'text-blue-600 underline'}`}
            onClick={() => setActiveTab('Warteliste')}
          >
            Warteliste
          </button>
          <button 
            className={`text-xs ${activeTab === 'Personal' ? 'text-blue-600 underline font-semibold' : 'text-blue-600 underline'}`}
            onClick={() => setActiveTab('Personal')}
          >
            Personal
          </button>
          <button 
            className={`text-xs ${activeTab === 'Termine' ? 'text-blue-600 underline font-semibold' : 'text-blue-600 underline'}`}
            onClick={() => setActiveTab('Termine')}
          >
            Termine
          </button>
          <button className="text-xs text-gray-400">
            Meldungen
          </button>
        </div>

        {/* Table Header */}
        <div className="bg-gray-200 flex px-3 py-1 text-xs font-semibold border-b border-gray-400">
          <div className="w-24">Patient *</div>
          <div className="w-16">Ges...</div>
          <div className="w-16">Typ</div>
          <div className="w-20">Status</div>
          <div className="w-24">Kennzeichen</div>
          <div className="flex-1">Aufnahme/Hinweis</div>
          <div className="w-8"></div>
        </div>

        {/* Table Content */}
        <div className="flex-1 overflow-auto">
          {bottomPatients.map((patient, i) => (
            <div key={i} className="flex px-3 py-1.5 text-xs border-b border-gray-300 items-center hover:bg-gray-50">
              <div className="w-24 flex items-center gap-1">
                <User className={`w-3.5 h-3.5 ${patient.gender === 'male' ? 'text-red-600' : 'text-pink-600'}`} />
                <span className="text-red-600">{patient.name}</span>
              </div>
              <div className="w-16">{patient.gender === 'male' ? '♂' : '♀'}</div>
              <div className="w-16">{patient.status}</div>
              <div className="w-20">{patient.condition}</div>
              <div className="w-24">{patient.label}</div>
              <div className="flex-1 text-gray-700">
                {i === 0 ? patient.info : (
                  <>
                    <span className="text-green-600">{patient.info.split(' ')[0]}</span>
                    <span> {patient.info.split(' ').slice(1).join(' ')}</span>
                  </>
                )}
              </div>
              <div className="w-8"></div>
            </div>
          ))}
        </div>

        {/* Station Info at bottom */}
        <div className="border-t-2 border-gray-500 bg-gray-50 p-3 grid grid-cols-2 gap-6">
          <div>
            <div className="text-xs font-semibold mb-2">Aktuelle Station</div>
            <div className="space-y-0.5 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Stationsverbund</span>
                <span className="font-medium">PS4 BWAA, S4 BWAA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Räume</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Mitarbeiter</span>
                <span className="font-medium">765</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Betten</span>
                <span className="text-gray-400">-</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Soll / Max</span>
                <span className="font-medium">22 / 22</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Belegte Betten</span>
                <span className="font-medium">18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Freie Betten</span>
                <span className="font-medium">4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Gesperrte Betten</span>
                <span className="font-medium">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Notbetten</span>
                <span className="font-medium">0</span>
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold mb-2">Station S4 BWAA</div>
            <div className="space-y-0.5 text-xs">
              <div className="text-gray-600 mb-1">Patienten</div>
              <div className="flex justify-between">
                <span className="text-gray-600">Aktuell</span>
                <span className="font-medium">10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Begleitpersonen</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Neugeborene</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Geplant</span>
                <span className="font-medium">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="bg-teal-300 px-3 py-1.5 flex items-center gap-4 text-black text-xs border-t border-gray-500">
        <button className="flex items-center gap-1.5">
          <span className="text-red-600 font-bold">⊙</span>
          <span>Filter</span>
        </button>
        <button>Station</button>
        <button className="text-gray-600">Raum/Bett</button>
        <button className="text-gray-600">Patient</button>
      </div>
    </div>
  );
};

export default HospitalWardSystem;
