const stats = [
  {
    label: "عدد الحجوزات",
    value: "45",
    delta: "-50.5",
    trend: "down",
    icon: "bookings",
  },
  {
    label: "متوسط التقييم",
    value: "4.8",
    delta: "+7.3",
    trend: "up",
    icon: "rating",
  },
  {
    label: "عدد المساحات",
    value: "1,234",
    delta: "+12.5",
    trend: "up",
    icon: "spaces",
  },
  {
    label: "عدد العقارات",
    value: "12",
    delta: "+7.3",
    trend: "up",
    icon: "buildings",
  },
];

const chartBars = [
  { label: "شقة صغيرة", value: 320 },
  { label: "منزل", value: 520 },
  { label: "فيلا", value: 210 },
  { label: "استوديو", value: 640 },
  { label: "مكتب", value: 320 },
  { label: "معرض", value: 280 },
  { label: "بيت", value: 610 },
  { label: "مستودع", value: 280 },
];

const reservations = [
  {
    client: "أحمد علي",
    property: "شقة في الزمالك",
    date: "8 نوفمبر 2025",
    status: "مؤكد",
    statusType: "confirmed",
    amount: "22,000 ريال",
  },
  {
    client: "مشاري العتيبي",
    property: "فيلا النخبة زايد",
    date: "7 نوفمبر 2025",
    status: "قيد الانتظار",
    statusType: "pending",
    amount: "22,000 ريال",
  },
  {
    client: "محمد حسن",
    property: "فيلا النخبة زايد",
    date: "6 نوفمبر 2025",
    status: "مؤكد",
    statusType: "confirmed",
    amount: "22,000 ريال",
  },
  {
    client: "خالد محمود",
    property: "فيلا النخبة زايد",
    date: "5 نوفمبر 2025",
    status: "ملغي",
    statusType: "cancelled",
    amount: "22,000 ريال",
  },
  {
    client: "خالد محمود",
    property: "فيلا النخبة زايد",
    date: "5 نوفمبر 2025",
    status: "مؤكد",
    statusType: "confirmed",
    amount: "22,000 ريال",
  },
];

const comments = [
  {
    name: "مشاري العنزي",
    score: "4.9",
    date: "منذ 12 أكتوبر",
    text:
      "تجربة رائعة جداً والرد سريع، المكان مرتب ونظيف والخدمة ممتازة والتفاصيل واضحة من البداية حتى نهاية الحجز.",
  },
  {
    name: "مشاري العنزي",
    score: "4.9",
    date: "منذ 12 أكتوبر",
    text:
      "وقع إيجابي من أول زيارة وما لفت انتباهي دقة الوصف والاهتمام بالموقع والتعامل المحترف، أنصح بالتجربة.",
  },
];

const sideNav = [
  { label: "الرئيسية", active: true, icon: "grid" },
  { label: "إدارة العقارات", icon: "building" },
  { label: "الحجوزات", icon: "reservation" },
  { label: "الإحصائيات", icon: "stats" },
  { label: "التعليقات", icon: "chat" },
  { label: "الأرباح", icon: "pen" },
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            <HomeIcon />
          </div>
          <div className="brand-text">HOMEZY</div>
        </div>

        <nav className="nav-list">
          {sideNav.map((item) => (
            <button key={item.label} className={`nav-item ${item.active ? "active" : ""}`}>
              <span className="nav-label">{item.label}</span>
              <span className="nav-icon">{renderSmallIcon(item.icon)}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div className="topbar-title">
            <span className="caret">▼</span>
            <span>قبيل العربي</span>
          </div>

          <div className="topbar-actions">
            <button className="circle-btn" aria-label="رسائل">
              <ChatIcon />
            </button>
            <button className="circle-btn" aria-label="إشعارات">
              <BellIcon />
            </button>
            <div className="avatar">K</div>
          </div>
        </header>

        <section className="content">
          <div className="page-heading">الرئيسية</div>

          <div className="stats-grid">
            {stats.map((item) => (
              <article key={item.label} className="stat-card">
                <div className="stat-head">
                  <div className="stat-main">
                    <div className="stat-label">{item.label}</div>
                    <div className="stat-icon">{renderStatIcon(item.icon)}</div>
                  </div>
                </div>
                <div className="stat-value">{item.value}</div>
                <div className={`stat-delta ${item.trend}`}>
                  <span>{item.trend === "up" ? "↑" : "↓"}</span>
                  <span>{item.delta} %</span>
                  <span>مقارنة بآخر 7 أيام</span>
                </div>
              </article>
            ))}
          </div>

          <div className="charts-grid">
            <section className="panel donut-panel">
              <div className="panel-title">توزيع أنواع العقارات</div>
              <div className="donut-layout">
                <div className="donut-wrap">
                  <div className="donut-chart">
                    <div className="donut-hole">
                      <strong>5</strong>
                      <span>إجمالي العقارات</span>
                    </div>
                  </div>
                </div>

                <div className="legend">
                  <div className="legend-item">
                    <span className="legend-dot shade-1" />
                    <div>
                      <strong>الشقق - %45</strong>
                      <small>عدد الوحدات 45 شقة</small>
                    </div>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot shade-2" />
                    <div>
                      <strong>الفلل - %35</strong>
                      <small>عدد الوحدات 35 فيلا</small>
                    </div>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot shade-3" />
                    <div>
                      <strong>العقارات الفندقية - %20</strong>
                      <small>عدد الوحدات 20 دور</small>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="panel chart-panel">
              <div className="panel-title">المساحات حسب العقار</div>
              <div className="bar-chart">
                <div className="y-axis">
                  {[800, 600, 400, 200, 100, 0].map((tick) => (
                    <span key={tick}>{tick}</span>
                  ))}
                </div>

                <div className="bars-area">
                  {[0, 1, 2, 3].map((line) => (
                    <div key={line} className="grid-line" />
                  ))}
                  <div className="bars">
                    {chartBars.map((bar) => (
                      <div key={bar.label} className="bar-column">
                        <div className="bar-track">
                          <div className="bar-fill" style={{ height: `${(bar.value / 700) * 100}%` }} />
                        </div>
                        <span>{bar.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="bottom-grid">
            <section className="panel reviews-panel">
              <div className="panel-header">
                <a href="/">عرض الكل</a>
                <div className="panel-title">التعليقات الحديثة</div>
              </div>

              <div className="review-list">
                {comments.map((comment, index) => (
                  <article key={`${comment.name}-${index}`} className="review-card">
                    <div className="review-top">
                      <a href="/">عرض التعليق</a>
                      <div className="review-meta">
                        <div className="mini-avatar">م</div>
                        <div>
                          <strong>{comment.name}</strong>
                          <div className="rating-line">
                            <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
                            <small>{comment.score}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-date">{comment.date}</div>
                    <p>{comment.text}</p>
                    <a href="/">عرض التعليق</a>
                  </article>
                ))}
              </div>
            </section>

            <section className="panel table-panel">
              <div className="panel-title">أحدث الحجوزات</div>

              <table className="reservations-table">
                <thead>
                  <tr>
                    <th>العميل</th>
                    <th>اسم العقار</th>
                    <th>التاريخ</th>
                    <th>الحالة</th>
                    <th>المبلغ</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((row, index) => (
                    <tr key={`${row.client}-${index}`}>
                      <td className="client-property">{row.client}</td>
                      <td className="client-property">{row.property}</td>
                      <td>{row.date}</td>
                      <td>
                        <span className={`status-pill ${row.statusType}`}>{row.status}</span>
                      </td>
                      <td className="amount">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

function renderSmallIcon(type) {
  const icons = {
    grid: <GridIcon />,
    building: <BuildingIcon />,
    reservation: <ReservationIcon />,
    stats: <StatsIcon />,
    chat: <ChatIcon />,
    pen: <PenIcon />,
  };

  return icons[type];
}

function renderStatIcon(type) {
  const icons = {
    bookings: <img src="/imegs/a4.png" alt="حجوزات" className="stat-icon-img" />,
    rating: <img src="/imegs/a3.png" alt="تقييم" className="stat-icon-img" />,
    spaces: <img src="/imegs/a1.png" alt="مشاهدات" className="stat-icon-img" />,
    buildings: <img src="/imegs/a2.png" alt="عقارات" className="stat-icon-img" />,
  };

  return icons[type];
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10.5 12 4l8 6.5" />
      <path d="M6 9.5V20h12V9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 17H9" />
      <path d="M18 17H6c1.2-1.2 2-3 2-5v-1a4 4 0 1 1 8 0v1c0 2 0.8 3.8 2 5Z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 10h10" />
      <path d="M7 14h6" />
      <path d="M5 19V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3Z" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="6" y="3" width="12" height="18" rx="1.5" />
      <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M11 21v-3h2v3" />
    </svg>
  );
}

function ReservationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16M8 14h3M8 17h5" />
    </svg>
  );
}

function StatsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 20V10" />
      <path d="M12 20V4" />
      <path d="M19 20v-7" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m4 20 4.5-1 9-9-3.5-3.5-9 9L4 20Z" />
      <path d="m13 6 3.5 3.5" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.5 6.7 19l1-5.8-4.2-4.1 5.9-.9L12 3Z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export default App;
